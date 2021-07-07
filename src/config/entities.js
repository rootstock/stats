/*
  Entities definitions
  - icon: icon class name
  - title: entity title
  - prefix: entity value prefix
  - suffix: entity value suffix
  - filters: String | Array : Vue filters names | { name:filterName, args:[] }
  - threshold: threshold name, view thresholds.js
  - thField: key of value to compute threshold
*/
export default {
  name: {
    icon: 'rsk',
    title: 'node name'
  },
  type: {
    icon: 'database',
    title: 'node type',
    filters: 'node-type'
  },
  mining: {
    icon: 'ellipsis',
    title: 'is mining',
    filters: 'yes-no',
    threshold: 'yesNo'
  },
  uptime: {
    icon: 'plug',
    filters: 'percent',
    threshold: 'time'
  },
  latency: {
    icon: 'stopwatch',
    title: 'node latency',
    threshold: 'latency',
    filters: 'ms-suffix'
  },
  peers: {
    icon: 'server'
  },
  pending: {
    icon: 'credit-card',
    title: 'pending transactions'
  },
  uncles: {
    subtitle: 'current / last 50',
    icon: 'git-merge'
  },
  blockTrans: {
    icon: 'rocket',
    title: 'block transactions'
  },
  lastBlockTime: {
    icon: 'cubes',
    title: 'last block',
    filters: 'abbr-time-seconds',
    suffix: ' ago',
    threshold: 'blockTime'
  },
  lastBlock: {
    icon: 'cube',
    title: 'last block',
    threshold: 'lastBlock',
    thField: 'lastBlockDifference',
    filters: 'locale'
  },
  bestBlock: {
    icon: 'cube',
    title: 'best block',
    filters: 'locale'
  },
  bestBlockTrim: {
    icon: 'cube',
    title: 'last block hash',
    filters: 'hash-trim',
    threshold: 'lastBlock',
    thField: 'lastBlockDifference'
  },
  lastBlockDifference: {
    icon: 'cube',
    prefix: '-',
    suffix: 'B',
    title: 'last block difference',
    threshold: 'lastBlock'
  },
  totalDiff: {
    icon: 'puzzle',
    title: 'total difficulty',
    filters: { name: 'H', args: [2] },
    threshold: 'hashes'
  },
  propTime: {
    title: 'propagation time',
    icon: 'stopwatch',
    threshold: 'propagation',
    filters: 'miliseconds'
  },
  avgPropTime: {
    title: 'average propagation time',
    icon: 'flame',
    filters: 'miliseconds',
    threshold: 'propagation'
  },
  avgBlockTime: {
    title: 'avg block time',
    icon: 'stopwatch',
    filters: 's-seconds',
    threshold: 'blockTime'
  },
  avgHashrate: {
    title: 'avg hash rate',
    icon: 'zap',
    filters: { name: 'Hs', args: [2] },
    threshold: 'hashes'
  },
  btcAvgHashrate: {
    title: 'btc avg hash rate',
    icon: 'zap',
    filters: { name: 'Hs', args: [3] },
    threshold: 'hashes'
  },
  hashrateComparedToBtcNetwork: {
    title: 'btc hash rate mining rsk',
    icon: 'rocket',
    filters: { name: 'percent', args: [2] },
    threshold: 'hashrateBtc'
  },
  lastDifficulty: {
    title: 'difficulty',
    icon: 'puzzle',
    filters: { name: 'H', args: [2] },
    threshold: 'hashes'
  },
  gasPrice: {
    title: 'avg gas price',
    icon: 'cube',
    cssClass: 'big-number',
    filters: 'wei'
  },
  gasLimit: {
    title: 'gas limit',
    icon: 'cube',
    cssClass: 'big-number',
    filters: 'gas'
  },
  nodeHistory: {
    title: 'node history',
    icon: 'pulse'
  },
  blocksChart: {
    threshold: 'blockTime',
    suffix: 's'
  },
  minGasPrice: {
    title: 'minimum gas price',
    icon: 'cube',
    cssClass: 'big-number',
    filters: 'gwei'
  }
}
