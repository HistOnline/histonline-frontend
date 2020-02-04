import styled from 'styled-components'

export const Mask = styled.div`
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
export const Wrap = styled.div`
  position: relative;
  width: 95%;
  margin: 0 auto;
  display: inline-block;
  background: blue;
  border-radius: 5px;
  box-shadow: 0 2px 3px rgba(0,0,0,0.2);

  #microscope_imgs{
      width: 100%;
      position: relative;
  }

  img, .svg_mask{
      display: block;
      width: 100%;
  }

  .svg_mask{
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;

      svg{
          width: 100%;
          height: 100%;
      }
  }

  .zoom{
      position: absolute;
      width: 15%;
      height: 10%;
      border: 2px solid #000;
      cursor: zoom-in;

      &:hover{
          border-color: #fff;
      }

      span{
          position: absolute;
          top: -20px;
          left: 5px;
      }
  }

  button{
    position: absolute;
    bottom: 15px;
    right: 15px;
    z-index: 20;
  }
`
