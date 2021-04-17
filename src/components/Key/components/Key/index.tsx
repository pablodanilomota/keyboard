/**
 * Hooks.
 */
import { useContext } from 'react'
import { useHistory } from 'react-router'

/**
 * Enums.
 */
import { COLORS } from '../../../../@types/enums'

/**
 * Context.
 */
import { KeyboardContext } from '../../../Context/components/Context'

/**
 * Styles.
 */
import { Container, Key as CustomKey } from './styles'

/**
 * JSX.
 */
export function Key() {
  /**
   * Hooks.
   */
  const { randomInformations } = useContext(KeyboardContext)
  const { push } = useHistory()

  if (!randomInformations?.randomLetter) push('/')

  return (
    <Container color={randomInformations?.randomColor || COLORS['green']}>
      <CustomKey>{randomInformations?.randomLetter.toUpperCase()}</CustomKey>
    </Container>
  )
}
