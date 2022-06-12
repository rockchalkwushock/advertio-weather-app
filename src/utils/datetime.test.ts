import { toHumanReadableTime } from './datetime'

describe('datetime.ts', () => {
  test('prints human readable time', () => {
    expect(toHumanReadableTime(1655025865)).toEqual('04:24')
  })
})
