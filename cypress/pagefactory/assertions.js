
    const traficSupportPage = require("../pageobject/traficSupportPage");
    const sel = new traficSupportPage()
    
    
class  assertions{

    validateHomePage(){
      //  cy.contains('Stromvergleich').should('exist')
 
 }

 validateApplicationSubmittedSuccessfully(jobDescription) {
//   class="posting-headline"
   // cy.contains('Automation Test Engineer').should('exist')
//const jobDescription = "Automation Test Engineer"

    cy.get('[class="posting-headline"]').should('include.text',jobDescription)
    cy.get('[data-qa="msg-submit-success"]').should('have.text','Application submitted!')//class="confirmation-message"
    cy.get('[class="template-btn-submit hex-color"]').should('have.text','Return to the main page')
 }
 validateSuccessfullResponse (jobDescription) {
 cy.url().as('getUrl');
 cy.get('@getUrl').then(API_URL => {
 cy.request({
   method: 'GET',
   url: `${API_URL}` 
   }).then((response) => {
   //cy.log(response.body)
  }).should(({status, body}) => {
 expect(status).to.eq(200)
 expect(body).includes('text',jobDescription) 
 expect(body).includes('text','Application submitted!') 
})
})
} 
}
module.exports = assertions;