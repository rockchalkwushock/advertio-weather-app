import React from 'react'
import {
  CityWeatherData,
  CityWeatherError,
  fetchWeatherForCity,
} from '../services/owm'

export type City = 'Bogota' | 'Lisbon' | 'Shanghai'
export type TemperatureScale = 'C' | 'F'

type Action = {
  payload: Partial<State>
  type: 'ERROR' | 'FETCHING' | 'FETCHED' | 'CHANGE_SCALE'
}

type State = {
  city: City
  isFetching: boolean
  isFetched: boolean
  response?: CityWeatherData | CityWeatherError
  scale: TemperatureScale
}

type UseCityWeather = () => State & {
  onChange: (city: City) => void
  onToggle: (scale: TemperatureScale) => void
}

const reducer: React.Reducer<State, Action> = (state, { payload, type }) => {
  switch (type) {
    case 'CHANGE_SCALE':
      return { ...state, ...payload }
    case 'ERROR':
      return { ...state, ...payload, isFetching: false, isFetched: true }
    case 'FETCHED':
      return { ...state, ...payload, isFetching: false, isFetched: true }
    case 'FETCHING':
      return { ...state, ...payload }
    default:
      return state
  }
}

const initialState: State = {
  city: 'Bogota',
  isFetched: false,
  isFetching: true,
  scale: 'C',
}

export const useCityWeather: UseCityWeather = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  React.useEffect(() => {
    // If already fetched
    if (state.isFetched && !state.isFetching) return
    if (!state.isFetched && state.isFetching) {
      fetchWeatherForCity(state.city)
        .then(data => {
          dispatch({
            payload: { response: data },
            type: 'FETCHED',
          })
        })
        .catch(err => {
          dispatch({
            payload: { response: err },
            type: 'ERROR',
          })
        })
    }
  }, [state.city, state.isFetched, state.isFetching])

  const onChange = React.useCallback(
    (city: City) => {
      // In both cases do not allow another request to be made.
      if (state.city === city) return
      if (state.isFetching) return

      // Cause useEffect to run.
      dispatch({
        payload: {
          city,
          isFetched: false,
          isFetching: true,
          response: undefined,
        },
        type: 'FETCHING',
      })
    },
    [state.city, state.isFetching]
  )

  const onToggle = (scale: TemperatureScale) =>
    dispatch({ payload: { scale }, type: 'CHANGE_SCALE' })

  return {
    ...state,
    onChange,
    onToggle,
  }
}
