/**
 * Hooks.
 */
import { useContext } from 'react'

/**
 * Context.
 */
import { KeyboardContext } from '../../../Context/components/Context'

/**
 * Styles.
 */
import { Container, Point, ColoredPoint } from './styles'

/**
 * Component.
 */
export function Points() {
  /**
   * Hooks.
   */
  const { errors, hits } = useContext(KeyboardContext)

  return (
    <Container>
      <Point>
        Acertos: <ColoredPoint color="#68ecb8">{hits}</ColoredPoint>
      </Point>
      <Point>
        Erros: <ColoredPoint color="#ec687a">{errors}</ColoredPoint>
      </Point>
    </Container>
  )
}
