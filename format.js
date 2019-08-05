'use strict'

const chalk = require('chalk')
const {map, take} = require('./sequences')

const def = factory => factory() // scope-controlling sugar

const pad = def((
  stringWidth = require('string-width'),
  padSize = (width, text) =>
    Math.max(0, width - stringWidth(text)),
) => ({
  left(width, text) {
    return '' + text + ' '.repeat(padSize(width, text))
  },
  right(width, text) {
    return ' '.repeat(padSize(width, text)) + text
  },
}))

const colours = {
  gray: chalk.gray,
  white: chalk.bold.whiteBright,
  blue: chalk.blueBright,
}

module.exports = def((
  {gray, white, blue} = colours,
  formatPulse = p =>
    pad.right(2, (p ? blue : gray)(p)),
  formatPulses = pulses =>
    [...map(formatPulse, take(16, pulses))].join(' '),
) => ({value, prime, factors, pulses}) => (
  [
    pad.left(10, prime ? white(value) : gray(value)),
    pad.left(20, prime ? white(`prime!`) : gray(factors)),
    formatPulses(pulses),
  ].join(' ')
))
