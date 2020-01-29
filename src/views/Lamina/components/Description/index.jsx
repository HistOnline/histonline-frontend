import React from 'react'

const Description = ({ lamina }) => {

  const filteredDescription = description => {
    
    let masks = lamina.mascaras
  
    masks.map( function({ alias }){
      var regex = new RegExp(` @${alias} `,"gi")
      var matches = description.match(regex)
      console.log('matches', matches, regex)
      if(matches){
        matches.map( function( match ){
          console.log(match)
          description = description.replace(match, ` <span class="blue">${match.replace(' ', '')}</span> `)
        })
      }
    })
  
    console.log('description', description)
    return description
  }
  
  return (
    <section id="descricao_lamina">
      <h1>Tecido X</h1>
      <p>{filteredDescription(lamina.descricao)}</p>
    </section>
  )
}

export default Description
