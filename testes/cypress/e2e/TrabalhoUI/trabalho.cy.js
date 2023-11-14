///  <reference types="cypress"/>

describe('Ver se funcoes basicas da AMAZON estao dando certo',() => {
    
    it('Caso de teste: Pesquisar algo inexistente',()=>{

      cy.visit('https://www.amazon.com.br')
      cy.get('#twotabsearchtextbox').click().type('hstegdns')
      cy.get('#nav-search-submit-button').click()
      cy.get('#nav-search-submit-button').click()
      cy.get('.s-no-outline > .a-size-base > span').should('contain.text', 'Tente verificar a ortografia ou usar termos mais genéricos')
    

    })

    it('Caso de teste: Fazendo um login com um email inexistente',()=>{

        cy.visit('https://www.amazon.com.br')
        cy.get('#nav-link-accountList').click()
        cy.get('#ap_email').click().type('jogadorcaro@ina.br')
        cy.get('.a-button-inner > #continue').click()
        cy.get('.a-list-item').should('contain.text', 'Não encontramos uma conta associada a este endereço de e-mail')
      
  
      })
      

    it('Caso de teste: Entrar com um cep',()=>{

        cy.visit('https://www.amazon.com.br')
        cy.get('#nav-global-location-popover-link').click()
        cy.get('#GLUXZipUpdateInput_0').click().type('37540')
        cy.get('#GLUXZipUpdateInput_1').click().type('000')
        cy.get('#GLUXZipUpdate').click()
        cy.get('#nav-global-location-popover-link').should('contain.text', '\n            \n            \n                \n                   Enviar para\n                \n                \n                    37540000‌\n                \n            \n        ')
      
  
      })

      it('Caso de teste: Pesquisar por ventilador',()=>{

        cy.visit('https://www.amazon.com.br')
        cy.get('#twotabsearchtextbox').click().type('ventilador')
        cy.get('#nav-search-submit-button').click()
        cy.get('#nav-search-submit-button').click()
        cy.get('.a-link-normal > .a-row > .a-color-base').should('contain.text', 'Confira nossas promoções em Ventiladores')
      
  
      })

      it('Caso de teste: Pesquisar por cadeira gamer',()=>{

        cy.visit('https://www.amazon.com.br')
        cy.get('#twotabsearchtextbox').click().type('cadeira gamer')
        cy.get('#nav-search-submit-button').click()
        cy.get('#nav-search-submit-button').click()
        cy.get('.s-no-outline > .a-row > .a-size-base').should('contain.text', 'O preço e outros detalhes variam de acordo com o tamanho e a cor do produto.')
      
  
      })

      it('Caso de teste: Fazendo um login com um email iexistente mas senha errada',()=>{

        cy.visit('https://www.amazon.com.br')
        cy.get('#nav-link-accountList').click()
        cy.get('#ap_email').click().type('annaclararenno@gmail.com')
        cy.get('.a-button-inner > #continue').click()
        cy.get('#ap_password').click().type('00000000')
        cy.get('#signInSubmit').click()
        cy.get('.a-list-item').should('contain.text', 'Sua senha está incorreta')
      
  
      })
      


  

 })