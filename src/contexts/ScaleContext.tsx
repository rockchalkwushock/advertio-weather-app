import React from 'react'

export type Scale = 'C' | 'F'

type Context = { onToggleScale: () => void; scale: Scale } | undefined
export const ScaleContext = React.createContext<Context>(undefined)

type Props = {
  children: React.ReactNode
}

export const ScaleProvider: React.FC<Props> = ({ children }) => {
  const [scale, setScale] = React.useState<Scale>('C')

  return (
    <ScaleContext.Provider
      value={{
        onToggleScale: () => setScale(scale === 'C' ? 'F' : 'C'),
        scale,
      }}
    >
      {children}
    </ScaleContext.Provider>
  )
}

export const useScale = () => {
  const ctx = React.useContext(ScaleContext)

  if (typeof ctx === 'undefined') {
    throw new Error('useScale must be used in scope of ScaleProvider.')
  }
  return ctx
}
