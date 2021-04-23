import { useContext } from 'react'

/**
 * Hook.
 */
import { useRandom } from './useRandom'

/**
 * Context.
 */
import { KeyboardContext } from '../components/Context/components/Context'
import { COLORS } from '../@types/enums'

/**
 * Type definitions.
 */
type Props = {
  key: string
}

/**
 * Hook.
 */
export const useKeyboard = () => {
  /**
   * Hooks.
   */
  const { randomizeLetter } = useRandom()
  const {
    setHits,
    setErrors,
    randomInformations,
    setRandomInformations
  } = useContext(KeyboardContext)

  const keyHandler = ({ key }: Props) => {
    /**
     * Set point.
     */
    key.toLocaleLowerCase() !== randomInformations?.randomLetter
      ? setErrors()
      : setHits()

    const colors = Object.keys(COLORS)

    const randomizedColor =
      COLORS[colors[Math.floor(Math.random() * colors.length)]]

    /**
     * Randomize.
     */
    const letter = randomizeLetter()

    setRandomInformations({
      randomLetter: letter,
      randomColor: randomizedColor
    })
  }

  return { keyHandler }
}
