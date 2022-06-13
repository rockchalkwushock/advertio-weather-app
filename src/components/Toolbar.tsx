import React from 'react'

import './Toolbar.css'
import { Select } from './Select'
import { Switch } from './Switch'
import { City } from '../hooks/useCityWeather'

type Props = {
  onChange: (city: City) => void
}

export const Toolbar: React.FC<Props> = ({ onChange }) => {
  return (
    <div className="AppToolbar">
      <Select onChange={onChange} />
      <div className="ScaleSwitcher">
        <span>˚C</span>
        <Switch />
        <span>˚F</span>
      </div>
    </div>
  )
}
