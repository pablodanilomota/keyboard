/**
 * Components.
 */

import { Button } from '../../../Button/components/Button'

/**
 * Styles.
 */
import { Container, Title } from './styles'

/**
 * Component.
 */
export function Results() {
  return (
    <Container>
      <Title>SCORE</Title>
      <Button onClick={() => console.log('voltar')}>Reset</Button>
    </Container>
  )
}
