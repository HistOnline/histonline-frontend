import React, { useContext } from 'react'
import LaminaContext from '../../context'
import MaskLink from './components/MaskLink'
import { Section } from './styles'

const Description = ({ lamina }) => {

  const context = useContext(LaminaContext)

  const FilteredDescription = description => {

    
    let masks = lamina.mascaras,
    descriptionMasks = [],
    descriptionText = []

    if(masks){
      masks.map( ({alias}) => {
        var regex = new RegExp(` @${alias} `,"gi")
        var matches = description.match(regex)
        console.log('matches', matches, regex)
        if(matches){
          matches.map( match => {
            let replacedMatch = match.replace(/ /gi, '')
            replacedMatch = replacedMatch.replace('@', '')
            description = description.replace(match, `{{{${replacedMatch}}}}`)
          })
        }
      })
    }

    descriptionMasks = [...description.matchAll(/\{\{\{\w+\}\}\}/gi)]
    descriptionMasks.forEach( (elem, idx, arr) => {
      let _temp = elem[0].replace(/\{\{\{/, '').replace(/\}\}\}/, '')
      arr[idx] = _temp
    })

    descriptionText = description.split(/\{\{\{\w+\}\}\}/gi)
    
    // Sempre vou assumir que tem um pequeno trecho antes da primeira máscara
    let descriptionReturn = []
    descriptionText.map( (text, index) => {
      descriptionReturn.push(text)
      descriptionMasks[index] && descriptionReturn.push(<MaskLink alias={descriptionMasks[index]}/>)
    })
    
    return descriptionReturn
  }

  return (
    <Section>
      <h1>{lamina.nome}</h1>
      <h4>{lamina.coloracao} - {lamina.aumento}x</h4>
      <p>{FilteredDescription(lamina.descricao)}</p>
    </Section>
  )
}

export default Description
