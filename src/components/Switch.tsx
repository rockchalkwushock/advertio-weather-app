import React from 'react'
import { TemperatureScale } from '../hooks/useCityWeather'

import './Switch.css'

type Props = {
  onToggle: (scale: TemperatureScale) => void
  scale: TemperatureScale
}

export const Switch: React.FC<Props> = ({ onToggle, scale }) => {
  return (
    <label
      className="AppSwitch"
      htmlFor="switch"
      onClick={() => onToggle(scale === 'C' ? 'F' : 'C')}
    >
      <input
        checked={scale === 'C' ? true : undefined}
        onChange={() => onToggle(scale === 'C' ? 'F' : 'C')}
        style={{
          transform: `translateX(${scale === 'C' ? '0' : '1.75rem'})`,
        }}
        type="checkbox"
      />
      <span
        className={`Slider ${scale === 'C' ? 'Celsius' : 'Fahrenheit'}`}
      ></span>
    </label>
  )
}
