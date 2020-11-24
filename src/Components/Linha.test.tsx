// import React from "react";
// import { render } from "@testing-library/react";
// import Linha from './Linha';

// // Describe is a test suite
// describe("Testing app functionalities", () => {

//   // It is an individual test
//   it("renders learn react link", () => {
//     const { getByText } = render(<Linha id={2} data="12/12/2020" descricao="Teste de rederizacao"/>);
//     // Search in component the 'Learn React' text
//     const learReact = getByText("12/12/2020 - Teste de rederizacao");
//     expect(getByText("12/12/2020 - Teste de rederizacao")).toBeVisible();
//   });

//   // It is an individual test
//   it("not renders learn react link", () => {
//     const { getByText } = render(<Linha id={2} data="12/12/2020" descricao="Teste de rederizacao"/>);
//     // Search in component the 'Learn React' text
//     const learReact = getByText("12/12/2020 - Teste de rederizacao");
//     expect(getByText("12/12/2020")).not.toBeVisible();
//   });
// });

import React from "react";
import { render } from "@testing-library/react";
import fireEvent from "@testing-library/user-event";
import Linha from "./Linha";

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
