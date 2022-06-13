import React from 'react'

import './Presentation.css'
import loader from '../loader.svg'
import { CityWeatherData, CityWeatherError } from '../services/owm'
import { toHumanReadableTime } from '../utils/datetime'
import { toCelsius, toFahrenheit } from '../utils/temperature'
import { useScale } from '../contexts/ScaleContext'
import { City } from '../hooks/useCityWeather'

type Props = {
  city: City
  data?: CityWeatherData
  error?: CityWeatherError
  isFetched: boolean
  isFetching: boolean
}

export const Presentation: React.FC<Props> = ({
  city,
  data,
  error,
  isFetched,
  isFetching,
}) => {
  const { scale } = useScale()
  return (
    <div className="Presentation">
      {isFetching && <img alt="Loading..." className="Loader" src={loader} />}
      {isFetched && error && (
        <>
          <h1>Error</h1>
          <p>{error.message}</p>
        </>
      )}
      {isFetched && data && (
        <>
          <div className="Temperature">
            <h1>
              {scale === 'C' ? toCelsius(data.temp) : toFahrenheit(data.temp)}{' '}
              <span>{scale === 'C' ? '˚C' : '˚F'}</span>
            </h1>
          </div>
          <div className="Icon">
            <img
              alt="current weather icon"
              src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`}
            />
          </div>
          <div className="SunriseAndSunset">
            <h2>
              Sunrise: <span>{toHumanReadableTime(data.sunrise, city)}</span>
            </h2>
            <h2>
              Sunset: <span>{toHumanReadableTime(data.sunset, city)}</span>
            </h2>
          </div>
        </>
      )}
    </div>
  )
}
