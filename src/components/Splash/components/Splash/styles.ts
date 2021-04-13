import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: white;
`

export const Image = styled.img`
  height: 700px;

  @media (max-width: 1400px) {
    height: 500px;
  }
`
