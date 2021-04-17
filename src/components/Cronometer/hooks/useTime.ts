import { useContext } from 'react'

/**
 * Hooks.
 */
import { useHistory } from 'react-router-dom'

/**
 * Context.
 */
import { KeyboardContext } from '../../Context/components/Context'

export const useTime = () => {
  /**
   * Hooks.
   */
  const { push } = useHistory()
  const { setTime, time } = useContext(KeyboardContext)

  const handleTime = () =>
    setTimeout(() => {
      if (time.currentTime === 0) return push('/result')

      setTime({
        initialTime: 60,
        currentTime: time.currentTime - 1
      })
    }, 1000)

  return {
    time,
    handleTime
  }
}
