import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Linha from './Components/Linha';
import './App.css';
import {
  Container,
  Titulo,
  Subtitulo,
  Box,
  Divisor
} from './styles';

interface InformacoesVideos {
  id: number,
  descricao: string,
  data: string,
}

const App = () => {

  const [listaReact, setListaReact] = useState<Array<InformacoesVideos>>([]);

  const reactTexto = <span>Iniciado como um projeto pelo seus idealizadores, Julio Sena e Silverio Vale no final do mês de Outubro de 2020, a intenção era de ser um chat de troca de informações sobre assuntos abordados dentro do mundo React, como: melhores práticas, ferramentas, etc.
  Logo no seu segundo encontro já não funcionou mais como um simples chat, pois a proporção que tomou foi muito grande, se comparada a um chat, pois a reunião teve em torno de 14 pessoas presentes e a média hoje já está em 20 pessoas.  Desde então os debates estão sendo gravados e estão disponíveis na lista abaixo.
É um tempo de crescimento mutuo e amadurecimento na área não só do React, mas em geral, podemos ver o agilismo e o design thinking (<a style={{ color: "#61dafb" }} href="https://medium.com/aela/double-diamond-como-utilizar-essa-metodologia-na-pr%C3%A1tica-5dc8a5d878bb">Double Diamond</a>) sendo observados com muita clareza.</span>;

  const projetoAcontecer = `O projeto é moderado pelo Silvério e Julio Sena, porém qualquer um é livre para discordar e expor sua opinião. Qualquer um pode dar inicio a discussão e se for de interesse fazer até mesmo um hands-on ou uma aprensentação.
  As reuniões tem sido gravadas e estão disponíveis no (dtiflix - Colocar o link aqui)`;

  useEffect(() => {
    axios.get(`https://react-challenge-api.herokuapp.com/first-challenge/episodes`)
      .then((res: any) => {

        const retornoLista = res.data.map((item: any) => {
          return {
            id: item.id,
            data: item.date,
            descricao: item.shortDescription
          } as InformacoesVideos;
        })
        setListaReact(retornoLista);
      })
  }, []);

  console.log(listaReact);

  return (
    <Container>
      <div>
        <Titulo>REACT DAILY CHAT</Titulo>
        <Box>
          {reactTexto}
        </Box>

        <Divisor></Divisor>

        <Titulo>ASSUNTOS DO DEBATE</Titulo>
        <Subtitulo>Já debatidos</Subtitulo>
        <ul> {listaReact &&
          listaReact.map(((item: InformacoesVideos, index: number) => (
            <Linha id={item.id} descricao={item.descricao} data={item.data}></Linha>
          )))}
        </ul>

        <Divisor></Divisor>

        <Subtitulo>Próximos assuntos</Subtitulo>
        <span>Obs.: Esses assuntos são temas que podem sofrer alterações devido ao desenvolvimento do debate, porém serão assuntos que provavelmente não deixarão de ser abordados.
        sugerimos que acompanhem todos os assuntos já aboradados para aproveitar melhor o conteúdo aqui explorado.
      </span>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Ut quis nibh eu nunc finibus condimentum.</li>
          <li>Aenean finibus risus ac urna bibendum, ac tempor enim euismod.</li>
        </ul>

        <Divisor></Divisor>

        <Subtitulo>Quem faz o projeto acontecer?</Subtitulo>
        <span>{projetoAcontecer}</span>
      </div>
    </Container>
  )}

export default App;
