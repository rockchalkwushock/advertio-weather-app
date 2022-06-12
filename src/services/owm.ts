if (typeof process.env.REACT_APP_OWM_API_KEY === 'undefined') {
  throw new Error(`
  REACT_APP_OWM_API_KEY not defined!
    - Check .env.local.
    - Check environment variables on Vercel.
  `)
}

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'

type OWMRawResponse = {
  base: string
  clouds: { all: number }
  cod: number
  coord: { lon: number; lat: number }
  dt: number
  id: number
  main: {
    feels_like: number
    humidity: number
    pressure: number
    temp: number
    temp_max: number
    temp_min: number
  }
  name: string
  sys: {
    type: number
    id: number
    country: string
    sunrise: number
    sunset: number
  }
  timezone: number
  visibility: number
  weather: Array<{
    description: string
    icon: string
    id: number
    main: string
  }>
  wind: { speed: number; deg: number; gust: number }
}

export type CityWeatherData = {
  icon: string
  name: string
  sunrise: number
  sunset: number
  temp: number
}

export type CityWeatherError = {
  message: string
  status: number
}

export const fetchWeatherForCity = async (
  city: string
): Promise<CityWeatherData | CityWeatherError> => {
  const res = await fetch(
    `${BASE_URL}?q=${city}&appid=${process.env.REACT_APP_OWM_API_KEY}`
  )

  if (!res.ok) {
    return {
      message: res.statusText,
      status: res.status,
    }
  }

  const { main, name, sys, weather } = (await res.json()) as OWMRawResponse

  return {
    icon: weather[0].icon,
    name,
    sunrise: sys.sunrise,
    sunset: sys.sunset,
    temp: main.temp,
  }
}
