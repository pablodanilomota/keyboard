import styled from 'styled-components'

/**
 * Type definitions.
 */
type Props = {
  color: string
}

export const Container = styled.div`
  top: 50px;
  left: 50px;
  display: flex;
  position: absolute;
  align-items: left;
  flex-direction: column;
  justify-content: left;
`

export const Point = styled.span`
  color: #f8f8f8;
  font-size: 50px;
  margin-bottom: 10px;
`

export const ColoredPoint = styled(Point)<Props>`
  color: ${({ color }) => (color ? color : '#f8f8f8')};
`
