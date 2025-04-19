import telaInicial from "/cypress/support/pageObjects/tela-inicial.page.js";

/**
 * DADO - BEFORE - RODA ANTES DO PRIMEIRO TESTE
 * BEFORE EACH - RODA ANTES DE CADA TESTE
 * FOR = PARA
 * EACH = CADA
 */

describe('Concluir itens', () => {
    beforeEach(()=>{
        cy.visit('/')
        var todoItens = ["Maça", "Banana", "Cenoura"]

        todoItens.forEach(function (item, indice,array ){
            telaInicial.inputText(item)
        })
    })

    it('Concluir um item da lista', () => {
        telaInicial.concluirItem()
    });
});