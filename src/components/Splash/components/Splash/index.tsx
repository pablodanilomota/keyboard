import BarLoader from 'react-spinners/BarLoader'

/**
 * Hooks.
 */
import { useSplash } from '../../hooks/useSplash'

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
  useSplash()

  /**
   * JSX.
   */
  return (
    <Container>
      <Image src="https://res.cloudinary.com/pablodanilomota/image/upload/v1618284673/assets-applications/keyboard/image_e6u4ds.png" />
      <BarLoader />
    </Container>
  )
}
