import telaInicial from "/cypress/support/pageObjects/tela-inicial.page.js";

/**
 * DADO - BEFORE - RODA ANTES DO PRIMEIRO TESTE
 * BEFORE EACH - RODA ANTES DE CADA TESTE
 * FOR = PARA
 * EACH = CADA
 */

describe('Deletar itens da lista', () => {
    beforeEach(()=>{
        cy.visit('/')
        var todoItens = ["Maça", "Banana", "Cenoura"]

        todoItens.forEach(function (item, indice,array ){
            telaInicial.inputText(item)
        })
    })

    it('deleção de um item da lista', () => {
    telaInicial.deletarItem()
    });
});