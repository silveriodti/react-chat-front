import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import * as Style from './styles'

interface Props {
  children: React.ReactNode
}

function Layout({ children }: Props) {
  return (
    <Style.Content>
      <Style.ContainerHeader>
        <Header />
      </Style.ContainerHeader>
      <Style.ContainerChildren>
        {children}
      </Style.ContainerChildren>
      <Style.ContainerFooter>
        <Footer />
      </Style.ContainerFooter>
    </Style.Content>
  )
}

export default Layout