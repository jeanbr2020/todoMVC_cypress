import telaInicial from "/cypress/support/pageObjects/tela-inicial.page.js";

/**
 * DADO - BEFORE - RODA ANTES DO PRIMEIRO TESTE
 * BEFORE EACH - RODA ANTES DE CADA TESTE
 * FOR = PARA
 * EACH = CADA
 */

describe('Adicionar items a lista', () => {
    beforeEach(()=>{
        cy.visit('/')
    })

    it('adicionar mais de um item a lista', () => {

     var todoItens = ["Maça", "Banana", "Cenoura", "Abacate"]

        todoItens.forEach(function (item, indice,array ){
            telaInicial.inputText(item)
        })
    });
});