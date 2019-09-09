import { nl2Br } from '../nl2Br'

it('returns correctly', () => {
  const text = 'foobar\n\n\n\n'

  expect(nl2Br(text)).toEqual('foobar<br /><br /><br /><br />')
})
