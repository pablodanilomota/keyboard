/**
 * Hooks.
 */
import { useSplash } from '../../hooks/useSplash'

/**
 * Component.
 */
import { Button } from '../../../Button/components/Button'

/**
 * Styles.
 */
import { Container, Image } from './styles'

/**
 * JSX.
 */
export function Splash() {
  /**
   * Hooks.
   */
  const { handleClick } = useSplash()

  /**
   * JSX.
   */
  return (
    <Container>
      <Image src="https://res.cloudinary.com/pablodanilomota/image/upload/v1618284673/assets-applications/keyboard/image_e6u4ds.png" />

      <Button onClick={handleClick}>Play now</Button>
    </Container>
  )
}
