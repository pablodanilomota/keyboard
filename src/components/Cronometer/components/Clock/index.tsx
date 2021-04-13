/**
 * Hooks.
 */
import { useTime } from '../../hooks/useTime'

/**
 * Styles.
 */
import { Container, Time } from './styles'

/**
 * Component.
 */
export function Clock() {
  /**
   * Hooks.
   */
  const { handleTime, time } = useTime()

  /**
   * Set time in cronometer.
   */
  handleTime()

  return (
    <Container>
      <Time>{time.currentTime}</Time>
    </Container>
  )
}
