/// <reference types="Cypress"/>

import Elements from '../PageObject/elements'; // All page element selectors are in this file

const element = new Elements();

describe('Testing Teladoc demo DB', function() {
    beforeEach (function(){
        cy.visit('https://www.way2automation.com/angularjs-protractor/webtables/');
    })

    // First test to add a user to the DB
    // I can add the typed in entries as a separate fixture file but did not in the interest of time
    it('Adds new user to table', function() {
        element.getAddUser().click();
        element.getModal().invoke('text').should('equal', 'Add User'); // Confirms Add User modal appears  
        element.getFirstName().type('Alex');
        element.getLastName().type('Molina');
        element.getUserName().type('User1');
        element.getPassword().type('Pass1');
        element.getCustomer().first().check(); // Selects first radio button
        element.getRole().select(2); // Select 2nd entry in the drop down
        element.getEmail().type('email@email.com');
        element.getCellPhone().type('2223334444');
        element.getSaveButton().click();
        element.getDBEntry().contains('User1').should('exist'); // Asserts if new user has been added
    })

    // Second test to remove the user 'novak' from the DB
    it('Removes user from table', function() {
       element.getDeleteEntry().click();
       element.getModal().invoke('text').should('equal', 'Confirmation Dialog'); // Confirms Confirmation Dialog modal appears  
       element.getConfirmDelete().click();
       element.getDBEntry().contains('novak').should('not.exist'); // Asserts if user has been removed
    })
})