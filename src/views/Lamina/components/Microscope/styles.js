import styled from 'styled-components'

export const Div = styled.div`
  z-index: 2;
  transition: .5s all;
  opacity: ${({ status }) => !!status ? 1 : 0 };
  
  svg{
    path{
      stroke: ${({ color }) => color ? color : '#000' } !important;
      stroke-width: 1px !important;
      fill: ${({ color }) => color ? `${color}33` : '#00000033' } !important;
    }
  }
`