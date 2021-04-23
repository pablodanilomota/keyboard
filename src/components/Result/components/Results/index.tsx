/**
 * Hooks.
 */
import { useHistory } from 'react-router'
import { KeyboardContext } from '../../../Context/components/Context'

/**
 * Context.
 */
import { useContext } from 'react'

/**
 * Components.
 */
import { Button } from '../../../Button/components/Button'

/**
 * Styles.
 */
import {
  Title,
  Point,
  Container,
  ColoredPoint,
  ContainerTitle,
  ResultContainer
} from './styles'

/**
 * Component.
 */
export function Results() {
  /**
   * Hooks.
   */
  const { push } = useHistory()
  const { hits, errors, setHits, setTime, setErrors } = useContext(
    KeyboardContext
  )

  /**
   * JSX.
   */
  return (
    <Container>
      <ContainerTitle>
        <Title>SCORE</Title>
      </ContainerTitle>
      <ResultContainer>
        <Point>
          Hits: <ColoredPoint color="#68ecb8">{hits}</ColoredPoint>
        </Point>
        <Point>
          Errors: <ColoredPoint color="#ec687a">{errors}</ColoredPoint>
        </Point>
      </ResultContainer>
      <Button
        onClick={() => {
          setHits(-1)
          setErrors(-1)
          setTime({ initialTime: 60, currentTime: 60 })

          push('/')
        }}
      >
        Back to start
      </Button>
    </Container>
  )
}
