import styled from 'styled-components'

export const ContentSection = styled.section`
  /* position: ${({fullScreen}) => fullScreen ? 'absolute' : 'relative'}; */
  top: ${({fullScreen, top}) => fullScreen ? `${top}px` : 'auto'};
  left: ${({fullScreen, left}) => fullScreen ? `${left}px` : 'auto'};
  width: ${({fullScreen, width}) => fullScreen ? `${width}px` : 'auto'};
  height: ${({fullScreen, height}) => fullScreen ? `${height}px` : 'auto'};
  animation: ${({fullScreen, virgin}) => fullScreen ? 'open .6s ease-in-out forwards' : !virgin ? 'close .6s ease-in-out forwards' : 'none'};

  @keyframes open{
    0% {
      position: relative;
    };
    1% {
      position: absolute;
      top: ${({top}) => `${top}px`};
      left: ${({left}) => `${left}px`};
      width: ${({width}) => `${width}px`};
      height: ${({height}) => `${height}px`};
    };
    100% {
      position: absolute;
      z-index: 99;
      top:0;
      left:0;
      width: 100vw;
      height: 100vh;
    }
  }

  @keyframes close{
    0% {
      position: absolute;
      top:0;
      left:0;
      width: 100vw;
      height: 100vh;
    };
    99% {
      position:absolute;
      top: ${({top}) => `${top}px`};
      left: ${({left}) => `${left}px`};
      width: ${({width}) => `${width}px`};
      height: ${({height}) => `${height}px`};
    };
    100% {
      position: relative;
    }
  }
`