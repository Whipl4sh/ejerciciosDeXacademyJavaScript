describe('Ejercicios de calentamiento',{testIsolation:false},()=>{
it('Verificar informacion del sitio',()=>{
    cy.visit('https://automationintesting.online')
    cy.get('p').contains('Shady Meadows B&B')
    cy.get('p').contains('The Old Farmhouse, Shady Street, Newfordburyshire, NE1 410S')
    cy.get('p').contains('012345678901')
    cy.get('p', { timeout: 10000 }).contains('fake@fakeemail.com');
})
it('Verificar si al menos hay una imagen visible',()=>{
    cy.get('img.hotel-logoUrl').should('be.visible')
    cy.get('img[alt="Preview image of room101"]').should('be.visible')
})
it('Verificar texto de presentacion de la Pagina este correcto',()=>{
    it('Verificar texto de presentacion de la Pagina este correcto', () => {
        cy.get('div.col-sm-10 > p').should('be.visible')
          .and('eq', 'Welcome to Shady Meadows, a delightful Bed & Breakfast nestled in the hills on Newingtonfordburyshire')
          .and('eq', 'A place so beautiful you will never want to leave.')
          .and('eq', 'All our rooms have comfortable beds and we provide breakfast from the locally sourced supermarket. It is a delightful place.');
      });
      
})


})