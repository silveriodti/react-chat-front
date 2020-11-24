import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LinhaClicavel, Gravacao } from '../styles'
import { links } from './Biblioteca';

const [collapse, setCollapse] = useState(true);
const [textoDescricao, setTextoDescricao] = useState("");
const [link, setLink] = useState("");
interface Props {
	id: number,
	data: string,
	descricao: string,
}

const Linha = ({
	id,
	data,
	descricao,
}: Props) => {

	useEffect(() => {
		axios.get(`https://react-challenge-api.herokuapp.com/first-challenge/episodes/${id}`)
			.then((res: any) => {
				const texto = res.data.fullDescriptionHtml;
				setTextoDescricao(texto);
				setLink(links[id]);
			})
	}, [id]);

	const abrirDescricao = () => {
		setCollapse(!collapse);
	}

	return (
		<li style={{ marginBottom: "20px" }} key={id} >
			<LinhaClicavel data-testid="linhaclicavel" onClick={abrirDescricao}>
				{data} - {descricao}
			</LinhaClicavel>
			{!collapse && (
				<div data-testid="conteudo" style={{ margin: "16px 0" }}>
					<div dangerouslySetInnerHTML={{ __html: textoDescricao }} />
					{link &&
						<Gravacao>
							<a href={link}>Gravação</a>
						</Gravacao>
					}
				</div>
			)}
		</li>
	)
}


export default Linha