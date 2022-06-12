import React from 'react'
import { City } from '../hooks/useCityWeather'

import './Select.css'

type Props = {
  onChange: (city: City) => void
}

export const Select: React.FC<Props> = ({ onChange }) => {
  const cities = React.useMemo<Array<City>>(
    () => ['Bogota', 'Lisbon', 'Shanghai'],
    []
  )
  return (
    <select
      className="AppSelect"
      id="cities"
      name="cities"
      onChange={val => onChange(val.currentTarget.value as City)}
    >
      {cities.map(city => (
        <option key={city} value={city}>
          {city}
        </option>
      ))}
    </select>
  )
}
