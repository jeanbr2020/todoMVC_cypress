const elem = require('../elements/tela-inicial.elements').ELEMENTS
const conclude = require('../elements/tela-inicial.elements').ITENS
const filtroItems = require('../elements/tela-inicial.elements').FILTERS

class telaInicial {
    inputText(dado){
        cy.get(elem.inputToDo).type(dado).type('{enter}')
    }

    validarInput(texto){
        cy.get(elem.inputToDo).should('have.attr', 'placeholder').and('include', texto)
    }

    validarContador(numero){
        cy.get(filtroItems.contador).find('strong').should('have.text', numero)
    }

    validarSizeToDo(numero){
        cy.get(conclude.validarListaItens).should('have.length', numero)
    }


    concluirItem(){
        cy.get(conclude.completeButton).first().click() //first = primeiro item / last = ultimo item//
    }

    filtrarItem(menu){
        cy.get(filtroItems.filtroToDo).contains(menu).and('be.visible').click()
    }

    deletarItem(){
        cy.get(conclude.listaItens).first().find('button').invoke('show').click() //invoke é uma função javascript que força o elemento a aparecer
    }
}



export default new telaInicial();