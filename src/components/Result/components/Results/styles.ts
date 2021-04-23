import styled from 'styled-components'

/**
 * Type definitions.
 */
type Props = {
  color: string
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 30px;
  align-items: center;
  background-color: #f8f8f8;
  height: 500px;
  width: 400px;
  border-radius: 15px;
`

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 110px;
  background-color: #ddd;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
`

export const Title = styled.div`
  font-size: 30px;
  color: #2d2d2d;
`

export const ResultContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: left;
  flex-direction: column;
  padding: 20px 50px;
`

export const Point = styled.span`
  font-size: 40px;
  color: #2d2d2d;
`

export const ColoredPoint = styled(Point)<Props>`
  color: ${({ color }) => (color ? color : '#f8f8f8')};
`
