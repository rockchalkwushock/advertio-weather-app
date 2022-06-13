import React from 'react'
import { useScale } from '../contexts/ScaleContext'

import './Switch.css'

export const Switch = () => {
  const { onToggleScale, scale } = useScale()
  return (
    <label className="AppSwitch" htmlFor="switch" onClick={onToggleScale}>
      <input
        checked={scale === 'C' ? true : false}
        onChange={onToggleScale}
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
