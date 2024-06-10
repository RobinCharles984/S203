describe('Django Tests', () => {
  it.skip('passes', () => {
    cy.visit('http://127.0.0.1:8000')
  })

  it.skip('Criando conta', () => {
    cy.visit('http://127.0.0.1:8000'),
    cy.get('.navbar-right > :nth-child(2) > a').click(),
    cy.get('#id_username').type("Tales1234"),
    cy.get('#id_email').type("email1234@email.com"),
    cy.get('#id_password').type("Senha123"),
    cy.get('.btn').click()
    cy.get('center[style="color:#fff"] > h2').should('have.text', "Welcome Tales1234!!")
  })

  it.skip('Logando em conta criada', () => {
    login()
  })

  it.skip('Ordenando por ordem alfabética', () => {
    cy.visit('http://127.0.0.1:8000'),
    cy.get('[href="/"] > button').click()
  })

  it.skip('Ordenando por gênero', () => {
    cy.visit('http://127.0.0.1:8000'),
    cy.get('[href="/genre/"] > button').click()
  })

  it.skip('Adicionando filmes a lista', () => {
    login(),
    cy.get(':nth-child(1) > .thumbnail > a > .img-responsive').click(),
    cy.get('[type="checkbox"]').check(),
    cy.get('.star-rating > .button').click(),
    cy.get('.alert').should('contain.text', "Success! Movie added to your list!"),
    cy.get('.navbar-right > :nth-child(1) > a').click()
  })

  it.skip('Pesquisando filme', () => {
    login(),
    cy.get('.form-control').type("Avengers"),
    cy.get('.button1').click()
  })

  it('Avaliando Filme', () => {
    login(),
    cy.get(':nth-child(2) > .thumbnail > a > .img-responsive').click(),
    cy.get('[data-rating="5"]').click(),
    cy.get('.input-group > .button').click(),
    cy.get('.alert').should('contain.text', "Success! Rating has been submitted!")
  })
})

function login(){
  cy.visit('http://127.0.0.1:8000'),
  cy.get('.navbar-right > :nth-child(2) > a').click(),
  cy.get('.navbar-right > :nth-child(3) > a').click(),
  cy.get('#id_username').type("Tales"),
  cy.get('#id_password').type("Senha123"),
  cy.get('.btn').click(),
  cy.get('center[style="color:#fff"] > h2').should('have.text', "Welcome Tales!!")
}