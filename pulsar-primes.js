'use strict'

const {phase, take, map, filter, compress} = require('./sequences.js')

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
  return {value, pulses, factors, prime}
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

const View = require('./view')
const format = require('./format')

function App(view = View()) {
  view.init()

  const workInterval = view.updateInterval - 1
  const retryDelay = 100

  const limit = parseInt(process.argv) || Infinity
  const facseq = factorize(limit)

  const stats = {primes: 0, latest: null}
  view.addMeta('primes', () => stats.primes)
  view.addMeta('latest prime', () => stats.primes)

  const scheduleWork = delay => setTimeout(work, delay)

  const work = () => {
    let {value, done} = facseq.next()
    if (done) return
    if (view.addLine(format(value))) {
      if (value.prime) {
        stats.primes++
        stats.latest = value.value
      }
      scheduleWork(workInterval)
    } else {
      scheduleWork(retryDelay)
    }
  }

  return {
    start() {
      scheduleWork(0)
    },
    exit() {
      view.destroy()
    },
  }
}


function main() {
  const app = App()
  require('signal-exit')(() => app.exit())
  app.start()
}

if (require.main === module) main()

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


// // Returns first truthy value in `seq`, or undefined if none is found
// function some(seq) {
//   for (let x of seq) if (x) return x
// }

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






// }}}
