import { toCelsius, toFahrenheit } from './temperature'

const kelvin = 299.2

describe('temperature.ts', () => {
  test('K --> C', () => {
    expect(toCelsius(kelvin)).toEqual(26)
  })

  test('K --> F', () => {
    expect(toFahrenheit(kelvin)).toEqual(79)
  })
})
