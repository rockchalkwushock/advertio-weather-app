import React from 'react'
import './App.css'
import { Header } from './components/Header'
import { Presentation } from './components/Presentation'
import { Toolbar } from './components/Toolbar'
import { useCityWeather } from './hooks/useCityWeather'

function App() {
  const { city, data, error, isFetched, isFetching, onChange } =
    useCityWeather()
  return (
    <div className="App">
      <Header />
      <div className="AppContent">
        <Toolbar onChange={onChange} />
        <Presentation
          city={city}
          data={data}
          error={error}
          isFetched={isFetched}
          isFetching={isFetching}
        />
      </div>
    </div>
  )
}

export default App
