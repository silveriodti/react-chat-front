import React from 'react'
import { useHistory } from 'react-router-dom'

import * as Style from './styles'

function Header() {
  const history = useHistory()

  return (
    <Style.ContainerHeader onClick={() => history.push('/')}>
      <Style.Tittle>REACT CHAT</Style.Tittle>
    </Style.ContainerHeader>
  )
}

export default Header