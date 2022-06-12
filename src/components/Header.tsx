import React from 'react'

import './Header.css'

type Props = {}

export const Header: React.FC<Props> = () => {
  return (
    <header className="AppHeader">
      <h1>Weather app</h1>
    </header>
  )
}
