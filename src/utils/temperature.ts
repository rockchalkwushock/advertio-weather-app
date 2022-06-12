const K = 273.15

export const toCelsius = (kelvin: number) => Math.round(kelvin - K)

export const toFahrenheit = (kelvin: number) =>
  Math.round((kelvin - K) * 1.8 + 32)
