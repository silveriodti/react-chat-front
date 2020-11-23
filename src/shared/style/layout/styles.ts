import styled from 'styled-components'
import { colors } from '../colors'

export const Content = styled.div`
  width: 100vw;
  height: 100%;
  overflow-x: hidden;
  background-color: ${colors.Gray50};
`

export const ContainerHeader = styled.div`
  width: 100%;
  min-height: 80px;
`

export const ContainerChildren = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
`

export const ContainerFooter = styled.div`
  width: 100%;
  height: 40px;
`