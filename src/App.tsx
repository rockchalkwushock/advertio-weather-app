import React from 'react'
import './App.css'
import { Header } from './components/Header'
import { Presentation } from './components/Presentation'
import { Toolbar } from './components/Toolbar'
import { useCityWeather } from './hooks/useCityWeather'

function App() {
  const { isFetched, isFetching, onChange, onToggle, response, scale } =
    useCityWeather()
  return (
    <div className="App">
      <Header />
      <div className="AppContent">
        <Toolbar onChange={onChange} onToggle={onToggle} scale={scale} />
        <Presentation
          data={response}
          isFetched={isFetched}
          isFetching={isFetching}
          scale={scale}
        />
      </div>
    </div>
  )
}

export default App
