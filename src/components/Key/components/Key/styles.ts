import styled from 'styled-components'
import { darken } from 'polished'

/**
 * Type definitions.
 */
type Props = {
  color: string
}

export const Container = styled.div<Props>`
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  border-radius: 50px;
  justify-content: center;
  background-color: ${({ color }) => color};
  border: 16px solid ${({ color }) => `${darken(0.2, color)}`};
`

export const Key = styled.span`
  color: #f8f8f8;
  font-size: 150px;
  font-weight: bold;
`
