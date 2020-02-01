import React, { useContext } from 'react'
import JsxParser from 'react-jsx-parser'
import LaminaContext from '../../context'

const MaskLink = ({alias}) => {
  console.log('CHILDREN', alias)
  return <strong>{alias}</strong>
}

const Description = ({ lamina }) => {

  const context = useContext(LaminaContext)

  const filteredDescription = description => {
    
    let masks = lamina.mascaras
    if(masks){
      masks.map( function({ alias }){
        var regex = new RegExp(` @${alias} `,"gi")
        var matches = description.match(regex)
        console.log('matches', matches, regex)
        if(matches){
          matches.map( function( match ){
            let replacedMatch = match.replace(' ', '')
            replacedMatch = replacedMatch.replace('@', '')
            description = description.replace(match, `<MaskLink alias='${replacedMatch}'/>`)
          })
        }
      })
    }
  
    return description
  }

  return (
    <section id="descricao_lamina">
      <h1>Tecido X</h1>
      <p><JsxParser
        components={{ MaskLink }}  
        jsx={filteredDescription(lamina.descricao)}
        renderInWrapper={false}
      /></p>
      <pre>
        {JSON.stringify(context, null, 2)}
      </pre>
    </section>
  )
}

export default Description
