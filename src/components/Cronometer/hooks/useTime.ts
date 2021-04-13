import { useState } from 'react'

/**
 * Hook.
 */
export const useTime = () => {
  /**
   * States.
   */
  const [time, setTime] = useState({ initialTime: 60, currentTime: 60 })

  const handleTime = () =>
    setTimeout(() => {
      if (time.currentTime === 0) return

      const timeToChange =
        time.initialTime === time.currentTime
          ? time.initialTime
          : time.currentTime

      setTime({ initialTime: 60, currentTime: timeToChange - 1 })
    }, 1000)

  return { handleTime, time }
}
