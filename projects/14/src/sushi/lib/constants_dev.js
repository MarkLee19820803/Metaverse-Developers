import BigNumber from 'bignumber.js/bignumber'

export const SUBTRACT_GAS_LIMIT = 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}

export const addressMap = {
  uniswapFactory: '0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95',
  uniswapFactoryV2: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  YFI: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
  YCRV: '0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8',
  UNIAmpl: '0xc5be99a02c6857f9eac67bbce58df5572498f40c',
  WETH: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  UNIRouter: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
  LINK: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
  MKR: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
  SNX: '0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F',
  COMP: '0xc00e94Cb662C3520282E6f5717214004A7f26888',
  LEND: '0x80fB784B7eD66730e8b1DBd9820aFD29931aab03',
  SUSHIYCRV: '0x2C7a51A357d5739C5C74Bf3C96816849d2c9F726',
}

export const contractAddresses = {
  sushi: {
    1: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
  },
  masterChef: {
    1: '0xc2edad668740f1aa35e4d8f227fb8e17dca888cd',
  },
  weth: {
    1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  },
  dpc: {
    1:'TNCupmRJVVAkT4paC5QUT7NTTqHDsPfv6g'
  },
  farm:{
    1:'TGSKuLgcbxaCtz1FRzrFCEhVmARVk8m9jk'
  }

}

export const supportedPools = [
  {
    pid: 0,
    tokenAddress: 'TWwDukMr34eY8dFdfahnZQooBVtDUJVD7u',
    poolAddress: 'TXhidgE41nXYVeC5MC5zXVEZsLNxY2ejkW',
    name: 'Wizard Magic',
    symbol: 'USDT/TRX ',
    symbolId:'USDT_TRX',
    tokenSymbol: 'USDT',
    icon: '🧙‍♂️',
  },
  {
    pid: 1,
    tokenAddress: 'TPUWtHDGFoupKo8WkrVace3wwH6x8eABC7',
    poolAddress: 'TE2NpERiTXXV7NSLY919ouEVy8XaWSEq8y',
    name: 'Superman Power',
    symbol: 'SUN/TRX ',
    symbolId:'SUN_TRX',
    tokenSymbol: 'SUN',
    icon: '🦸‍♂️',
  },
  {
    pid: 2,
    tokenAddress: 'TKTvbgWUsZ4WQGQNAWcPZUV5fuEVFYwjvy',
    poolAddress: 'TWh13tVViaDom5AdQ2cyXHMbSeacJWBjXd',
    name: 'Ape Planet',
    symbol: 'BTC/TRX ',
    symbolId:'BTC_TRX',
    tokenSymbol: 'BTC',
    icon: '🐵',
  },
  {
    pid: 3,
    tokenAddress: 'TNtuJfKQYC2NFV1LzkfHB2y9WG8PKkQxkz',
    poolAddress: 'TTDxsojzssR75PireSoxkoP3CKmNCzCmKy',
    name: 'Alien Army',
    symbol: 'TRX/BKEY ',
    symbolId:'TRX_BKEY',
    tokenSymbol: 'BKEY',
    icon: '👽',
  },
]
