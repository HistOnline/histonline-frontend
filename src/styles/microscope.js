import styled from 'styled-components'

export const Div = styled.div`
  z-index: 2;
  opacity: 0;
  
  svg{
    path{
      stroke: ${({ color }) => color ? color : '#000' } !important;
      stroke-width: 1.2px !important;
      fill: ${({ color }) => color ? `${color}33` : '#00000033' } !important;
    }
  }
`