import styled from 'styled-components'

export const Link = styled.div`
  position: relative;
  cursor: pointer;
  display: inline-block;
  font-weight: bold;
  color: ${({light}) => light ? '#000' : '#fff'};
  background: ${({color}) => color};
  padding: 0 5px;
  border-radius: 2px;
  margin: 0 3px;
  
  div{
    position: absolute;
    font-size: 12px;
    background: ${({color}) => color};
    width: 200px;
    min-height: 100px;
    top: 20px;
    left: 0;
    padding: 3px;
    padding-bottom: 20px;
    border-radius: 0 2px 2px 2px;
    box-shadow: 4px 4px 3px rgba(0,0,0,0.2);
    z-index: 2;

    &::after{
      content: 'clique para visualizar';
      opacity: 0.5;
      position: absolute;
      font-size: 10px;
      bottom: 4px;
      left: 55px;
      z-index: 3;
    }
  }
`