This test uses Cypress with Javascript. In order to run the test, use the following steps.

1) Install Node.js on your machine if it is not there already to run the Cypress test runner.
2) From the command line (either within windows or in Visual Studio), navigate to this folder you downloaded. 
3) Type "npm install" on the command line within that folder. This will install Cypress (using package.json) and its predefined framework to run the tests.
4) Move the two test file folders you downloaded in the Integraton folder to the new Cypress folder installed within its own Integration subfolder. Their paths should be as follows after they are moved: \cypress\integration\PageObject\elements.js and \cypress\integration\Teladoc\editDB.js. 
5) You can delete the example scripts Cypress gives you to save space in the Cypress UI.
6) To use Cypress Test Runner, type the command "npx cypress open" on the command line.
7) Within the Cypress UI, click on editDB.js to run the test script.

The two test files I used are elements.js and editDB.js
