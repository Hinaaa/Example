import 'cypress-file-upload';

class  traficSupportPage{
    
    homePageCookies(){
        cy.get('[class="cmp-container first-load"]') 
    }
    homePageCookiesAccept(){
        cy.get('[id="uc-btn-accept-banner"]')
    }
    homePageMyAccount(){
        cy.get('[class="page-account-label"]')
    }
    homeHeaderImage() 
    {
        cy.get('[class="page-logo-img"]')
    }
    homePageHeaderImage(){
        cy.get('[class="page-logo-img"]')
    }
    accordionItemContent(){
        cy.get('[class="accordion-item-content"]')
    }
    calculatorHeadLineText(){
        cy.get('[class="calculator-headline"]')
    }
    ageTextbox(myAge){
        cy.get('[name="age"]').type(myAge); 
    }
    selectSituationGroup(situationGroupText){
        cy.get('[name="situationGroup"]').select(situationGroupText)
    }
    jetztVergleichenButtonClick(){
        cy.get('[class="page-button"]').click()
    }
    selectVersicherungen(){
        cy.get('[class="accordion-toggle-label icn-a-angle-down-outlined"]').within(() => {
            cy.contains('Versicherungen').click().wait(1000)
        })
    }
    selectprivathaftpflicht(){
        cy.get('[href="/privathaftpflicht/"]').eq(1).click()
    }
    clickSubmit() {
        cy.get('[type="submit"]').eq(1).click().wait(2000)
    }
    selectDateofBirth(birthDate) {
        cy.get('[class="su-calendar-input input"]').clear()
        cy.get('[class="su-calendar-input input"]').type(birthDate)
    }
    enterPostCode(zipCode) {
        cy.get('[id="prestep_postcode"]').type(zipCode).wait(2000)
    }
    clickJetztVergleichen() {
        cy.get('[class="next"]').within(() => {
            cy.contains('Jetzt vergleichen').click({force:true})
          })
    }
    clickLoadButton() {
        cy.get('[class="button load-more-button"]').click().wait(1000)
    } 
    openTariffDetails() {
        cy.get('[class="product"]').eq(0).within(() => {
            cy.contains('Tarifdetails').click().wait(5000)
          })
    } 
    clicktoLoadMore() {
        cy.get('[class="button load-more-button"]').click().wait(5000)
    } 

    //NEW
    //Select Job Type Filter
    jobType(jobType){
        cy.get('[data-placeholder="Job type (All)"]').next().click()
        cy.get('[class="select2-results').eq(0).within(() => {
            cy.contains(jobType).click({force: true})
        })
    }
    selectJob(jobDescription) {
        cy.contains(jobDescription).parent().next().within(() => {
            cy.contains('View job').click().wait(2000)
        })
    
    }
  clickApplyforJob() {
    cy.get('[class="postings-btn template-btn-submit hex-color').eq(0).click().wait(1000)
}
   enterName(applicantName) {
    cy.get('[name="name"]').type(applicantName)
}
enterEmail(applicantEmail) {
    cy.get('[name="email"]').type(applicantEmail)
}
    enterPhoneNo(applicantPhoneNo) {
        cy.get('[name="phone"]').type(applicantPhoneNo)
    }
    enterOrg(applicantOrg) {
        cy.get('[name="org"]').type(applicantOrg)
    }
    enterLinkedIn(applicantLinkedIn) {
        cy.get('[name="urls[LinkedIn]"]').type(applicantLinkedIn)
    }
    enterExpectedSalary(applicantExpectedSalary) {
        cy.get('[placeholder="Type your response"]').type(applicantExpectedSalary)
    }   
    enterAdditionalInformation(applicantAdditionalInformation) {
        cy.get('[id="additional-information"]').type(applicantAdditionalInformation)
    }    
    acceptConsent() {
        cy.get('[name="consent[marketing]"]').eq(1).click()
    }   
    clickSubmitButton() {
       cy.get('[data-qa="btn-submit').click().wait(2000)      
    }
    acceptCapta() {
        cy.confirmCaptcha()
        cy.pause()
       // cy.get('[data-qa="btn-submit').click()
       
    }
    
    resumeUpload(filepath) {
         cy.get('[id="resume-upload-input"]').attachFile(filepath);
      }
    verifyProfileImageUploaded() {
        cy.get('[data-qa="ImageField_image"]')
          .should('have.attr', 'style')
          .and('contain', 'background-image: url("/document-service/documents/');
      }
}

module.exports = traficSupportPage;