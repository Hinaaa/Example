const data=require('../../testData/data1.json');
const prodSelection= require("../../pagefactory/traficFeatures");
const traficSupportPage = require('../../pageobject/traficSupportPage');
const assertionPage= require("../../pagefactory/assertions");
 const sel = new traficSupportPage() 
 const assertionObj = new assertionPage()
 
let i=0;
require('cypress-xpath')

describe('Testcase to Verify the DSL calculator', function ()  {
    before(() => {
        cy.fixture('navigation/pageURL').then(pageURL => {
          globalThis.pageURL = pageURL; //Centralized url, define in fixture
          cy.visit(pageURL) //visit URL
          assertionObj.validateHomePage()
        })
      });
   Object.keys(data)
       .forEach(function(tc,i){
           const testData=data[i];
           it(testData.tc,function() {
               execute(testData)
           })
       })
})

function execute(data) {

//Navogates too Privathaftpflicht
prodSelection.selectJob(data.jobType, data.jobDescription)
prodSelection.applyforJob(data.applicantName,data.applicantEmail,data.applicantPhoneNo,data.applicantOrg,data.applicantLinkedIn,data.applicantExpectedSalary, data.applicantAdditionalInformation)

//cy.visit("https://jobs.lever.co/userlane/9ff78ee1-9eb2-4cad-b7da-76757cd3c122/thanks")
assertionObj.validateApplicationSubmittedSuccessfully(data.jobDescription)
assertionObj.validateSuccessfullResponse(data.jobDescription)
cy.pause()
}
