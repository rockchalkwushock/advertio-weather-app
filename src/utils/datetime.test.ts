import { toHumanReadableTime } from './datetime'

describe('datetime.ts', () => {
  test('prints human readable time for Bogota', () => {
    expect(toHumanReadableTime(1655025865, 'Bogota')).toEqual('04:24')
  })
  test('prints human readable time for Lisbon', () => {
    expect(toHumanReadableTime(1655025865, 'Lisbon')).toEqual('10:24')
  })
  test('prints human readable time for Shanghai', () => {
    expect(toHumanReadableTime(1655025865, 'Shanghai')).toEqual('17:24')
  })
})
