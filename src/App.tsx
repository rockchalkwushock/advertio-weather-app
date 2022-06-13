import React from 'react'
import './App.css'
import { Header } from './components/Header'
import { Presentation } from './components/Presentation'
import { Toolbar } from './components/Toolbar'
import { useCityWeather } from './hooks/useCityWeather'

function App() {
  const { isFetched, isFetching, onChange, response } = useCityWeather()
  return (
    <div className="App">
      <Header />
      <div className="AppContent">
        <Toolbar onChange={onChange} />
        <Presentation
          data={response}
          isFetched={isFetched}
          isFetching={isFetching}
        />
      </div>
    </div>
  )
}

export default App
