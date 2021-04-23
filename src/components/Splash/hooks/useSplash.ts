import { useContext, useEffect } from 'react'

/**
 * Hooks.
 */
import { useRandom } from '../../../hooks/useRandom'
import { useHistory } from 'react-router-dom'

/**
 * Context
 */
import { KeyboardContext } from '../../Context/components/Context'
import { COLORS } from '../../../@types/enums'

/**
 * Hook.
 */
export const useSplash = () => {
  /**
   * Hooks.
   */
  const { push } = useHistory()
  const { randomizeLetter } = useRandom()
  const { setRandomInformations } = useContext(KeyboardContext)

  useEffect(() => {
    /**
     * Randomize.
     */
    const letter = randomizeLetter()

    const colors = Object.keys(COLORS)

    const randomizedColor =
      COLORS[colors[Math.floor(Math.random() * colors.length - 1)]]

    setRandomInformations({
      randomLetter: letter,
      randomColor: randomizedColor
    })
  }, [randomizeLetter, setRandomInformations])

  const handleClick = () => {
    push('/keyboard')
  }

  return { handleClick }
}
