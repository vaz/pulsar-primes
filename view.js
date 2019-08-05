'use strict'

const {map, take, concat} = require('./sequences')


const Canvas = (
  charm,
  {top, height, background},
) => {
  charm = charm || require('charm')(process.stdout)
  return {
    clear() {
      charm.reset()
      for (let i = top; i < height; i++) {
        charm.position(0, i)
        charm.erase('line')
      }
    },
    redraw(lines) {
      let i = top
      for (let line of lines) {
        charm.position(0, i++)
        charm.display('reset')
        charm.background(background)
        charm.write('' + line)
        charm.erase('end')
      }
    },
  }
}

const Updater = (refreshRate = 24) => {
  const interval = Math.floor(1000 / refreshRate)
  let handle = null
  return {
    get interval() { return interval },
    start(tickFn) {
      if (handle) this.stop()
      handle = setInterval(tickFn, interval)
    },
    stop() {
      if (handle) {
        clearInterval(handle)
        handle = null
      }
    },
  }
}

const View = (options) => {
  const defaults = {
    refresh: 24, // refresh rate: updates per second
    top: 1,
    height: 30,
    background: 'black',
    showMeta: true,
    charm: null, // override to e.g. attach different out stream
  }
  const opts = {...defaults, ...options}

  const canvas = Canvas(opts.charm, opts)
  const updater = Updater(opts.refresh)

  const state = {
    frame: 0,
    lines: [],
    queue: [],
    meta: [
      ['frame', () => state.frame],
      ['lines', () => state.lines.length],
      ['queued', () => state.queue.length],
    ],
  }

  const metaHeight = () => opts.showMeta ? state.meta.length : 0
  const mainHeight = () => opts.height - metaHeight()
  const isQueueFull = () => state.queue.length >= opts.height * 2

  const metaLines = () => {
    if (!opts.showMeta) return []
    return map(([name, getter]) => name + ': ' + getter(), state.meta)
  }

  const lines = () =>
    take(opts.height, concat(metaLines(), state.lines))

  const render = () =>
    canvas.redraw(lines())

  const tick = () => {
    state.frame++
    const {queue, lines} = state
    const line = queue.shift()
    if (line) {
      // scroll viewport if viewport is already full
      if (lines.length >= opts.height) lines.shift()
      lines.push(line)
      render() // redraw the screen
    }
  }

  return {
    init() {
      canvas.clear()
      updater.start(tick)
    },

    destroy() {
      updater.stop()
    },

    addLine(text) {
      if (isQueueFull()) return false
      state.queue.push(text)
      return true
    },

    addMeta(name, getter) {
      state.meta.push([name, getter])
    },

    get updateInterval() {
      return updater.interval
    },
  }
}

module.exports = View
