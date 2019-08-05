//// Lazy list functions: phase (aka drop), take, map, filter, compress...
'use strict'

module.exports = {
  phase,
  take,
  map,
  filter,
  compress,
  concat,
}

// Skips `n` values from `seq` and then yields the rest in turn. Usually
// better known as "drop", in this case it's being used to shift the phase
// of a repeating, periodic infinite sequence.
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

// identity function is useful
const id = x => x

// Yields from `seq` only truthy values
function* compress(seq) {
  yield* filter(id, seq)
}

// yield all from first seq, then all from second, etc.
function* concat(...seqs) {
  for (let seq of seqs) yield* seq
}


//// Didn't end up using these: {{{

if (false) {
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
}
