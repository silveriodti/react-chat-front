
import React from "react";
import { render } from "@testing-library/react";
import fireEvent from "@testing-library/user-event";
import Linha from "../Components/Linha";

describe("Teste da linha de conteudo do React Daily Chat", () => {
  it("Teste do clique na linha para expandir e contrair", () => {
    
    // Usar a versão assíncrona de act para aplicar Promises resolvidas
    
    const {getByTestId, queryByTestId} = render(<Linha id={2} data="12/12/2020" descricao="lorem ipsom"/>);
    
    expect(queryByTestId("conteudo")).toBeNull();
    
    fireEvent.click(getByTestId("linhaclicavel"),{
      bubbles: true,
      cancelable: true,
    })
    
    expect(queryByTestId("conteudo")).toBeVisible();
    
    fireEvent.click(getByTestId("linhaclicavel"),{
      bubbles: true,
      cancelable: true,
    })
    
    expect(queryByTestId("conteudo")).toBeNull();
    
  });
});
