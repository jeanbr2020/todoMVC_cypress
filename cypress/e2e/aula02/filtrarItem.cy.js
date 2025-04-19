import telaInicial from "/cypress/support/pageObjects/tela-inicial.page.js";

/**
 * DADO - BEFORE - RODA ANTES DO PRIMEIRO TESTE
 * BEFORE EACH - RODA ANTES DE CADA TESTE
 * FOR = PARA
 * EACH = CADA
 */

describe('Validar os filtros da aplicação após adicionar um item', () => {
    beforeEach(()=>{
        cy.visit('/')
        var todoItens = ["Maça", "Banana", "Cenoura"]

        todoItens.forEach(function (item, indice,array ){
            telaInicial.inputText(item)
        })

        telaInicial.concluirItem()
    })

    /**
     * clicar no filtro
     * o item ser exibido
     * o contador deve bater a informação
     */

    it('Filtrar por items ativos', () => {
    telaInicial.filtrarItem('Active')
    });

    it.skip('Filtrar itens concluidos', () => {

    });
});