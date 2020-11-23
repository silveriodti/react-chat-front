import styled from 'styled-components';

import { colors } from '../../../shared/style/colors'

export const Container = styled.div`
 background-color: white;
 padding: 16px;
 margin: 32px 0;
 border: 1px  solid;
 border-radius: 8px;
`

export const Titlle = styled.h2`
  text-align: center;
  margin: 64px 0;
  font-weight: 900;
  font-size: 64px;
`

export const Date = styled.div`
  text-align: end;
  font-weight: 600;

`
export const Content = styled.div`
  margin: 16px;
  text-align: left;
  font-weight: 600;
  font-size: 24px;
  color: ${colors.Gray700}

`
export const ContainerVideo = styled.div`
  max-width: 853px;
  margin: auto
`

export const ContainerFrame = styled.div`
  position: relative; 
  padding-bottom: 56.25%; 
  height: 0; 
  overflow: hidden;
`
export const Iframe = styled.iframe.attrs((props) => ({
  src: props.src,
})
)`
  width: 853px;
  height: 480px;
  border:none; 
`

