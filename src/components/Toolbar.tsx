import React from 'react'

import './Toolbar.css'
import { Select } from './Select'
import { Switch } from './Switch'
import { City, TemperatureScale } from '../hooks/useCityWeather'

type Props = {
  onChange: (city: City) => void
  onToggle: (scale: TemperatureScale) => void
  scale: TemperatureScale
}

export const Toolbar: React.FC<Props> = ({ onChange, onToggle, scale }) => {
  return (
    <div className="AppToolbar">
      <Select onChange={onChange} />
      <div className="ScaleSwitcher">
        <span>˚C</span>
        <Switch onToggle={onToggle} scale={scale} />
        <span>˚F</span>
      </div>
    </div>
  )
}
