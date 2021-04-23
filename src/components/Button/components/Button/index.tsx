import { ReactNode } from 'react'

/**
 * Styles.
 */
import { Button as CustomButton } from './styles'

/**
 * Type definitions.
 */
type Props = {
  onClick: () => void
  children: ReactNode
}

/**
 * Component.
 */
export function Button({ children, onClick }: Props) {
  return <CustomButton onClick={onClick}>{children}</CustomButton>
}
