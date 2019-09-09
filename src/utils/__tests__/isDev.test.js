import { isDev } from '../isDev'

describe('when the NODE_ENV == development', () => {
  const OLD_ENV = process.env

  beforeEach(() => {
    jest.resetModules()
    process.env = { ...OLD_ENV, NODE_ENV: 'development' }
  })

  afterEach(() => {
    process.env = OLD_ENV
  })

  it('returns true', () => {
    expect(isDev()).toEqual(true)
  })
})

describe('when the NODE_ENV != development ', () => {
  const OLD_ENV = process.env

  beforeEach(() => {
    jest.resetModules()
    process.env = { ...OLD_ENV, NODE_ENV: 'production' }
  })

  afterEach(() => {
    process.env = OLD_ENV
  })

  it('returns false', () => {
    expect(isDev()).toEqual(false)
  })
})
