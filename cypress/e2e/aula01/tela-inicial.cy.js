import telaInicial from "/cypress/support/pageObjects/tela-inicial.page.js";


describe('Acessar a página do todoMVC', () => {
  it('Abrir o site', () => {
    cy.visit('https://browserbench.org/Speedometer2.0/resources/todomvc/vanilla-examples/vanillajs/index.html')
    telaInicial.inputText()
    telaInicial.concluirItem()
  })
})