import React, { ReactNode, useState } from 'react'
import { COLORS } from '../../../../@types/enums'

/**
 * Type definitions.
 */
type Props = { children: ReactNode }
type Time = {
  initialTime: number
  currentTime: number
}
type RandomInformations = {
  randomLetter: string
  randomColor: string
}

type ContextType = {
  time: Time
  hits: number
  errors: number
  setHits: (value?: number) => void
  setTime: (time: Time) => void
  setErrors: (value?: number) => void
  randomInformations?: RandomInformations
  setRandomInformations: (randomInformations: RandomInformations) => void
}

/**
 * Context.
 */
export const KeyboardContext = React.createContext<ContextType>({
  time: {
    initialTime: 60,
    currentTime: 60
  },
  hits: 0,
  errors: 0,
  setTime: () => {},
  setHits: () => {},
  setErrors: () => {},
  randomInformations: {
    randomLetter: '',
    randomColor: COLORS['green']
  },
  setRandomInformations: () => {}
})

/**
 * Component.
 */
export function Context({ children }: Props) {
  /**
   * States.
   */
  const [time, setTimeValue] = useState({ initialTime: 60, currentTime: 60 })
  const [hits, setHitsValue] = useState(0)
  const [errors, setErrorsValue] = useState(0)
  const [
    randomInformations,
    setRandomInformationsValue
  ] = useState<RandomInformations>()

  /**
   * Component functions.
   */
  const setTime = (time: Time) => setTimeValue(time)
  const setHits = (value?: number) => setHitsValue((value || hits) + 1)
  const setErrors = (value?: number) => setErrorsValue((value || errors) + 1)
  const setRandomInformations = (randomInformations: RandomInformations) =>
    setRandomInformationsValue(randomInformations)

  return (
    <KeyboardContext.Provider
      value={{
        time,
        hits,
        errors,
        setHits,
        setTime,
        setErrors,
        randomInformations,
        setRandomInformations
      }}
    >
      {children}
    </KeyboardContext.Provider>
  )
}
