import styled from 'styled-components'
import { colors } from '../../style/colors'

export const ContainerHeader = styled.header`
  height: 100%;
  height:100%;
  background-color: ${colors.Gray800}
`

export const Tittle = styled.h1`
  font-family: serif;
  font-size: min(10vw, 72px);
  font-weight: bold;
  text-align: center;
  padding: 32px;
  cursor: pointer;

  color: ${colors.Gray200};
`
