// All the elements on the DB page I am testing are here

class Elements{

getAddUser() {
   return cy.get('button.btn.btn-link.pull-right')
} 

getModal() {
    return cy.get('div h3')
 } 

 getFirstName() {
    return cy.get('input[name="FirstName"]')
 } 

 getLastName() {
    return cy.get('input[name="LastName"]')
 } 

 getUserName() {
    return cy.get('input[name="UserName"]')
 } 

 getPassword() {
    return cy.get('input[name="Password"]')
 } 

 getPassword() {
    return cy.get('input[name="Password"]')
 } 

 getCustomer()  {
    return cy.get('input[name="optionsRadios"]')
 } 

 getRole()  {
    return cy.get('select[name=RoleId]')
 } 

 getEmail()  {
    return cy.get('input[name="Email"]')
 } 

 getCellPhone()  {
    return cy.get('input[name="Mobilephone"]')
 } 

 getCellPhone()  {
    return cy.get('input[name="Mobilephone"]')
 } 

 getSaveButton()  {
    return cy.get('button.btn.btn-success')
 } 

 getDBEntry()  {
    return cy.get('td')
 } 

 getDeleteEntry()  {
    return cy.get(':nth-child(3) > :nth-child(11) > .btn')
 } 

 getConfirmDelete()  {
    return cy.get('button.btn.ng-scope.ng-binding.btn-primary')
 } 


}

export default Elements;
