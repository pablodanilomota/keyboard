/**
 * Hooks.
 */
import { useHistory } from 'react-router-dom'

/**
 * Hook.
 */
export const useSplash = () => {
  const { push } = useHistory()

  setTimeout(() => {
    push('/keyboard')
  }, 3000)
}
