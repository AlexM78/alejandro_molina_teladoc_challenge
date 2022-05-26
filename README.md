This test uses Cypress with Javascript. In order to run the test, use the following steps.

1) Install Node.js on your machine if it is not there already.
2) Create a folder on your machine to clone/download the test code.
3) In that folder, insert the package.json file. This contains the dependencies needed for this test (namely Cypress).
4) Within that folder, from the terminal (either within windows or in Visual Studio), use the "npm install" command. This will install Cypress and its predefined framework.
5) Make sure the two test files are in the cypress directory structure as such: \cypress\integration\PageObject\elements.js and \cypress\integration\Teladoc\editDB.js. You can delete the example scripts Cypress gives you to save space in the Test Runner UI.
6) To use Cypress Test Runner, type the command "npx cypress open" on the command line.
7) Within the Cypress UI, click on editDB.js to run the test script.

The two test files I used are elements.js and editDB.js
