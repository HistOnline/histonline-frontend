import React, { useState, useContext } from 'react'
import LaminaContext from '../../../../context'

const MaskLink = ({ alias }) => {
  console.log('CHILDREN', alias)
  return <strong>{alias}</strong>
}

export default MaskLink