const id = x => x   // the identity function is always handy.


// Generates a repeating pattern of `p` (period) ticks, consisting of
// a non-zero value followed by `p - 1` zeroes. Thus, the non-zero serves
// as a periodic pulse being generated at a regular interval `p`.
// The generated sequence is infinite. The period `p` is yielded as
// the non-zero value, because why not.
function* pulsar(p=3) {
  // trivial unrolled implementations of the most common (least period)
  // pulsars, following the Premature Optimization paradigm:
  if (p === 2)        while (1) { yield p; yield 0 }
  else if (p === 3)   while (1) { yield p; yield 0; yield 0 }
  else {
    // the general implementation:
    let i = 1
    while (1) {
      while (--i) yield 0
      yield (i = p)
    }
  }
}

///
// Lazy list functions: phase (aka drop), take, map, filter, compress, some...

// Skips `n` values from `seq` and then yields the rest in turn. AKA drop.
function* phase(n, seq) {
  while (n--) seq.next()
  yield* seq
}

// Takes up to `n` values from `seq` and then stops
function* take(n, seq) {
  for (let x of seq) {
    if (n-- < 0) break
    yield x
  }
}

// Returns a new sequence with each item in `seq` transformed by `fn`
function* map(fn, seq) {
  for (let x of seq) yield fn(x)
}

// Yields from `seq` only values that satisfy the predicate `pred`
function* filter(pred, seq) {
  for (let x of seq) if (pred(x)) yield x
}

// Yields from `seq` only truthy values
function* compress(seq) {
  yield* filter(id, seq)
}

// Returns first truthy value in `seq`, or undefined if none is found
function some(seq) {
  for (let x of seq) if (x) return x
}

function pulsarSystem() {
  const pulsars = []
  const spawn = p => pulsars.push(phase(1, pulsar(p)))
  const nextValue = seq => seq.next().value
  const zipNext = seqs => [...map(nextValue, seqs)]
  return {
    spawn,
    next: () => ({value: zipNext(pulsars)}),
    [Symbol.iterator]() { return this },
    tick() { return nextValue(this) },
  }
}

function factorized(value, pulses) {
  const factors = [...compress(pulses)]
  const prime = !factors.length
  return {value, pulses, factors, prime,}
}

function* factorize(limit=Infinity) {
  let pulsys = pulsarSystem()
  let value = 1
  while (++value < limit) {
    const pulses = pulsys.tick()
    const f = factorized(value, pulses)
    if (f.prime) pulsys.spawn(value)
    yield f
  }
}

function main() {
  const stringWidth = require('string-width')
  const left = (width, text) =>
    '' + text + ' '.repeat(Math.max(0, width - stringWidth(text)))
  const right = (width, text) =>
          ' '.repeat(Math.max(0, width - stringWidth(text))) + text

  const chalk = require('chalk')
  const gray = x => chalk.gray(x)
  const white = x => chalk.whiteBright.bold(x)
  const blue = x => chalk.blueBright(x)

  const formatPulses = pulses => {
    return map(p => right(2, (p ? blue : gray)(p)), take(16, pulses))
  }

  const format = ({value, prime, factors, pulses}) => {
    const c0 = prime ? white(value) : gray(value)
    const c1 = prime ? white(`prime!`) : gray(factors)
    const c2 = [...formatPulses(pulses)].join(` `)
    return [
      left(10, c0),
      left(20, c1),
      c2
    ].join(' ')
  }

  const charm = require('charm')(process.stdout)

  const view = {
    top: 5,
    left: 5,
    height: 20,
    width: 60,
    lines: [],
    queue: [],
    changed: true,
    bg: 'black',
    init() {
      charm.reset()
      charm.position(view.left, this.top)
      for (let i = 0; i < this.height; i++) {
        charm.write(' '.repeat(this.width) + "\n")
      }
    },
    tick() {
      if (this.queue.length > 0) {
        if (this.lines.length >= this.height) {
          this.lines.shift()
        }
        this.lines.push(this.queue.shift())
        this.render()
      }
      if (this.showStats) this.updateStats()
    },
    get full() { return this.queue.length >= this.height * 2 },
    enqueue(text) {
      if (this.full) return false
      this.queue.push(text)
      return true
    },
    showStats: true,
    frame: 0,
    stats: { primes: 0, latestPrime: -1, },
    updateStats() {
      this.frame++
      if (!this.showStats) return
      charm.position(0,1)
      charm.erase('line')
      charm.write('primes: ' + this.stats.primes + ', latest: ' + this.stats.latestPrime)
      charm.position(0,2)
      charm.erase('line')
      charm.write('lines: ' + this.lines.length)
      charm.position(0,3)
      charm.erase('line')
      charm.write('queue: ' + this.queue.length)
      charm.position(0,4)
      charm.erase('line')
      charm.write('frame: ' + this.frame)
    },
    render() {
      charm.position(this.left, this.top)
      let i = this.top
      for (let line of view.lines) {
        charm.position(view.left, i++)
        charm.background('black')
        charm.write('' + line)
        charm.erase('end')
        charm.display('reset')
      }
    }
  }

  view.init()

  const REFRESH = 24
  const INTERVAL = Math.floor(1000/REFRESH)
  const updateView = () => view.tick()

  const updateiv = setInterval(updateView, INTERVAL)

  const limit = parseInt(process.argv) || Infinity
  const facseq = factorize(limit)
  const formatted = map(f => {
    f.formatted = format(f)
    return f
  }, facseq)

  const work = () => {
    if (view.full) {
      return setTimeout(work, 100)
    }
    let {value, done} = formatted.next()
    if (!done) {
      if (value.prime) {
        view.stats.primes++
        view.stats.latestPrime = value.value
      }
      view.enqueue(value.formatted)
      return setTimeout(work, 40)
    }
  }
  setTimeout(work, 0)

}

if (require.main === module) main()
;

// // Generate candidates using pulsars, eliminating multiples
// // of first bunch of primes.
// function* primeCandidates() {
//   let i = 1
//   const pulsars = []
// }

// function* primes(candidates) {

//   // ticks each pulsar and returns truthy if any were truthy (pulsing):
//   const pulse = i => {
//     // spread to make sure they all tick forward:
//     const x = some([...map(p => p.next(i).value, pulsars)])
//     if (!x) {
//       for (const mp of modPulsars) {
//         let y = mp.next(x).value
//         if (y) return y
//       }
//     }
//     return x
//   }

//   while (++i) {
//     if (!pulse(i)) {
//       yield i                    // found a prime; yield it
//       pulsars.push(pulsar(i, 1)) // add new pulsar to skip its multiples
//     }
//   }
// }

// // the hard truth:
// function* notPulsarPrimes() {
//   let i = 1
//   const primes = []
//   const pulsars = []

//   // ticks each pulsar and returns truthy if any were truthy (pulsing):
//   const pulse = i =>
//           // spread to make sure they all tick forward:
//           some([...map(p => p.next(i).value, pulsars)])

//   while (++i) {
//     let x = pulse(i)
//     if (!x) {
//       // check the long way
//       const rt_i = Math.floor(Math.sqrt(i))
//       let isPrime = true
//       let p
//       for (p of primes) {
//         if (p >= rt_i) break
//         if (i % p === 0) {
//           isPrime = false
//           break
//         }
//       }
//       if (isPrime) {
//         primes.push(i)
//         yield i                    // found a prime; yield it
//         // !! as this number goes down to zero, the thing gets faster.
//         // !! well that sucks, oh well.
//         if (i < 100) {
//           // console.log(`pushing pulsar: ${i} --- count: ${pulsars.length}`)
//           pulsars.push(pulsar(i, 1)) // add new pulsar to skip its multiples
//         }
//       }
//       else {
//         // console.log(`== verified non-prime: ${p} | ${i}`)
//         // process.exit()
//       }
//     }
//     else {
//       // console.log(`== pulse: ${x} | ${i}`)
//     }
//   }
// }

// function main() {
//   const n = parseInt(process.argv[2] || '1000')

//   // Okay, let's use this weird system of pulsars to get some primes finally:
//   for (let p of pulsarPrimes()) {
//     if (p > n) break
//     console.log(p)
//   }
// }

// if (require.main === module) main()

// This is way more space-efficient than a typical sieve and actually
// models the intent of the Sieve of Eratosthenes better (imo) than
// the usual implementations (which represent every number from 1 to n
// as an array of booleans or bits, and sequentially "toggles off" all
// the multiples of each prime).
//
// I have no idea how much less time-efficient it is.






// Didn't end up using these:
;(() => {
  // Combines corresponding values from seqs into an iterable of arrays.
  // The length of the returned iterable will be the length
  // of the shortest iterable in seqs.
  function* zip(...seqs) {
    while (1) {
      // collect one value from each iterable in seqs, into an array:
      const values = seqs.reduce((values, seq) => {
        const {value, done} = seq.next()

        // if any iterable is done, return null to throw array the reduce:
        if (!values || done) return null

        values.push(value)
        return values
      }, [])

      // if we threw array the reduce, we're also done here:
      if (!values) return

      yield values
    }
  }

  function* range(start=0, end=null, step=1) {
    if (end <= start) return
    for (let i = start; i < (end || Infinity); i += step)
      yield i
  }

  function* times(n, fn=null) {
    const r = range(0, n)
    if (!fn) yield* r
    else yield* map(fn, r)
  }

  function doseq(seq) {
    for (let x of seq);
  }

  function dotimes(n, fn=null) {
    doseq(times(n, fn))
  }
})
