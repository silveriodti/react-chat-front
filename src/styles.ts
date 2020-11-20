import styled from 'styled-components'

export const Container = styled.div`
    background-color: #282c34;
    margin: 60px;
    color: white;
`;

export const Titulo = styled.h2`
margin: 28px 0 20px;
`;

export const Subtitulo = styled(Titulo)`
    font-size: 22px;
`;

export const Divisor = styled.hr`
    margin: 20px 0;
`;

export const Box = styled.div`
    border: double 5px;
    padding: 16px;
    margin: 16px 0;
`;


export const LinhaClicavel = styled.div`
    cursor: pointer;
    text-decoration: underline;
    color: #61dafb;
`
export const Gravacao = styled.div`
    margin: 12px 0;
    text-transform: uppercase;
    color:  #61dafb !important;
    >a{color:  #61dafb};
`

