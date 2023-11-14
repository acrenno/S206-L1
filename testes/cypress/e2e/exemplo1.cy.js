/*
/// <reference types = "cypress"/>

describe('Criando cenario de teste para o site globalsqa',()=>{

  it.skip ('Caso de teste: Registrar um usuario no site com sucesso', ()=>{
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('.btn-link').click()
    cy.get('#firstName').type('anna')
    cy.get('#TEST1').type('anna')
    cy.get('#username').type('anna')
    cy.get('#password').type('aninha')
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should('contain.text', 'Registration successful')
  })

  
  it.skip ('Caso de teste: Registrar um usuario no site sem sucesso', ()=>{
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/register')
  
    cy.get('#firstName').type('inatel')
    cy.get('#TEST1').type('inatel')
    cy.get('#username').type('inatel')
    cy.get('#password').type('inatel')
    cy.get('#password').clear()
    cy.get('.has-error > .help-block').should('have.text', 'Password is required')
    cy.get('.btn-primary').should('be.disabled')
   
  })
  

  it ('Caso de teste: Registrar um usuario no site com sucesso', ()=>{
   
    let info = criarusuario()
    cy.get('#username').type(info[0])
    cy.get('#password').type(info[1])
   
  })

})

function criarusuario(){

let horas = new Date().getHours().toString()
let minutos = new Date().getMinutes().toString()
let user = horas + minutos + 'aninha'
let senha = horas + minutos + 'senha'
let usuarioInfo = [user,senha]

  cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
  cy.get('.btn-link').click()
  cy.get('#firstName').type(user)
  cy.get('#TEST1').type(user)
  cy.get('#username').type(user)
  cy.get('#password').type(senha)
  cy.get('.btn-primary').click()
  cy.get('.ng-binding').should('contain.text', 'Registration successful')

  

})
*/