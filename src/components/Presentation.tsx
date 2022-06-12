import React from 'react'

import './Presentation.css'
import loader from '../loader.svg'
import { CityWeatherData, CityWeatherError } from '../services/owm'
import { toHumanReadableTime } from '../utils/datetime'
import { toCelsius, toFahrenheit } from '../utils/temperature'
import { TemperatureScale } from '../hooks/useCityWeather'

type Props = {
  data?: CityWeatherData | CityWeatherError
  isFetched: boolean
  isFetching: boolean
  scale: TemperatureScale
}

export const Presentation: React.FC<Props> = ({
  data,
  isFetched,
  isFetching,
  scale,
}) => {
  return (
    <div className="Presentation">
      {isFetching && <img alt="Loading..." className="Loader" src={loader} />}
      {isFetched && (
        <>
          <div className="Temperature">
            <h1>
              {scale === 'C'
                ? toCelsius((data as CityWeatherData).temp)
                : toFahrenheit((data as CityWeatherData).temp)}{' '}
              <span>{scale === 'C' ? '˚C' : '˚F'}</span>
            </h1>
          </div>
          <div className="Icon">
            <img
              alt="current weather icon"
              src={`http://openweathermap.org/img/wn/${
                (data as CityWeatherData).icon
              }@2x.png`}
            />
          </div>
          <div className="SunriseAndSunset">
            <h2>
              Sunrise:{' '}
              <span>
                {toHumanReadableTime((data as CityWeatherData).sunrise)}
              </span>
            </h2>
            <h2>
              Sunset:{' '}
              <span>
                {toHumanReadableTime((data as CityWeatherData).sunset)}
              </span>
            </h2>
          </div>
        </>
      )}
    </div>
  )
}
