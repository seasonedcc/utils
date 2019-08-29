
import { clipString } from '../clipString'

it('clip the text', () => {
    const text = 'basic test for clip string'
    const size = 10

    expect(clipString(text, size)).toEqual('bas...ing')
})

describe('when text length < size', () => {
    it('returns the text', () => {
        const text = 'foobar'

        expect(clipString(text)).toEqual(text)
    })
})
