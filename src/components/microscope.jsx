import React, { useState, useEffect } from 'react';
import Zoom from './zoom';
import axios from 'axios'

class Svg extends React.Component {
  state = {
    svg: null,
    loading: false,
  }

  componentDidMount() {
    fetch(this.props.url)
      .then(res => res.text())
      .then(text => this.setState({ svg: text }));
  }

  render() {
    const { loading, svg } = this.state;
    if (loading) {
      return <div className="spinner"/>;
    } else if(!svg) {
      return <div className="error"/>
    }
    return <div dangerouslySetInnerHTML={{ __html: this.state.svg}} style={{
    position: 'absolute',
  top: 0,
left: 0}}/>;
  }
}

const Microscope = ({ lamina }) => {

  const [ masks, setMasks ] = useState([])
  const { imagem, mascaras } = lamina

  useEffect(() => {
    console.log('microscope')
    mascaras.map( mascara => {
      axios(mascara.vector)
      .then(response => {
        let tmpMasks = masks
        tmpMasks.push(response.data)
        setMasks(tmpMasks)
        console.log(tmpMasks)
      })
      .catch(err => console.log(err))
    })
  }, [])

  useEffect(() => {
    console.log('masks', masks)
  }, [masks])

  console.log('lamina', lamina)

    return (
      <section id="microscope">
        <div id="microscope_img">
          <img src={imagem[0]} />
          {mascaras.map( mascara => {
            return <Svg url={mascara.vector}/>
          })}
          {/* <Zoom lens="200" href="lamina_y_200" top="45" left="45" /> */}
        </div>
        <div className="legenda">
          <div />
          <div>
            <h4>Legenda</h4>
            <div className="legenda">
              {mascaras.map( mascara => {
                return <div>
                  <div className="color"></div>
                  <h4>{mascara.title}</h4>
                  <p>{mascara.description}</p>
                </div>
              })}
            </div>
          </div>
        </div>
      </section>
    );
}

export default Microscope;