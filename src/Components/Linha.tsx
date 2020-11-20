import React, { useState } from 'react';
import axios from 'axios';
import { LinhaClicavel, Gravacao } from '../styles'

interface Props {
    id: number,
    data: string,
    descricao: string,
}
const links: { [id: number]: string; } = {
    1: "",
    2: "https://web.microsoftstream.com/video/32390b7b-694e-4a6b-b46a-7363deda5c93",
    3: "https://web.microsoftstream.com/video/59005cb9-9390-4090-b7dd-4fca3de82de5",
    4: "https://web.microsoftstream.com/video/7f5a7592-720c-41bd-ae8a-757d0f72e0ca",
    5: "https://web.microsoftstream.com/video/0ed3d7ee-2851-4b1d-826a-84c6d3eb7b73",
    6: "https://web.microsoftstream.com/video/4e77f5dd-6729-4235-b10b-52cb660df50f",
    7: "https://web.microsoftstream.com/video/befad310-2134-484c-843e-d4bbc19dce2b",
    8: "https://web.microsoftstream.com/video/73d0a2cf-e838-440e-bf16-29469ef7cdc0",
    9: "https://web.microsoftstream.com/video/e127ffdb-ec5b-45e6-b566-c8db4651f923",

}

const Linha = ({
    id,
    data,
    descricao,
}: Props) => {

    const [collapse, setCollapse] = useState(true);
    const [textoDescricao, setTextoDescricao] = useState("");
    const [link, setLink] = useState("");

    const abrirDescricao = () => {
        setCollapse(!collapse);
        axios.get(`https://react-challenge-api.herokuapp.com/first-challenge/episodes/${id}`)
            .then((res: any) => {
                const texto = res.data.fullDescriptionHtml;
                setTextoDescricao(texto);
                setLink(links[id]);
            })
    }

    return (
        <li style={{ marginBottom: "20px" }} key={id} >
            <LinhaClicavel onClick={abrirDescricao}>
                {data} - {descricao}
            </LinhaClicavel>
            {!collapse && (
                <div style={{ margin: "16px 0" }}>
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