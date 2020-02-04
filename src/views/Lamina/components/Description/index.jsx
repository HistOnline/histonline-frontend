import React, { useContext } from 'react'
import JsxParser from 'react-jsx-parser'
import LaminaContext from '../../context'
import MaskLink from './components/MaskLink'
import { Section } from './styles'

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
            let replacedMatch = match.replace(/ /gi, '')
            replacedMatch = replacedMatch.replace('@', '')
            description = description.replace(match, `<MaskLink alias='${replacedMatch}'/>`)
          })
        }
      })
    }
  
    return description
  }

  return (
    <Section>
      <h1>{lamina.nome}</h1>
      <h4>{lamina.coloracao} - {lamina.aumento}x</h4>
      <p><JsxParser
        components={{ MaskLink }}  
        jsx={filteredDescription(lamina.descricao)}
        renderInWrapper={false}
      /></p>
      {/* <pre>
        {JSON.stringify(context, null, 2)}
      </pre> */}
    </Section>
  )
}

export default Description
