# youLogo
 
To simply execute all of the feature files : 
./node_modules/.bin/cypress-tags run -g 'cypress/integration/**/*.feature'

This test suite is configured with cucumber tool. 
https://cucumber.io/docs/guides/overview/

This test suite is able to generate a html report after each execution.
It does the screen recording for each test case execution when lunched in headless mode. 
It also takes screenshot in case of any failure, if there is any failure; then it retries the execution 4 more times.

The parts that needs to be configured ? 

# Hooks : 
 Hooks needs to be used to meke the test suite work more convincingly.

# Test Data management : 
 Test data can be read from scenario outline, json files, or any files from the project directory. 
 
# Custom commands : 
 Costum commands, comman functions should be created and added in the command.js file
 
# Environment variables :
Environment details should be stored in cypress.json file, uat, dev, it
API end points, DB cridentials etc.

# An efficient approach for managing UI components/pages
 if applicable; page-object model can be implemented
 
# Changing browser behavior :
 adjusting the browser window before the execution, managing the sessions, cookies, cashes.
 
# Mocking the API/DB :
  Effective approach is needed for mocking API/DB
  
# Regression, Integration, Smoke, E22 testing :
 These type of testing needs to be configured using cucumber tags
 
# Validators :
 Validator methods/functions needs to be created; a function that receives 2 parameters ->expected json and actual json
 To basically check if records send from UI/API is reached to DBs
 
 # Dao Layer :
  An convenient way to retrive records from DB needs to be found and Test suite needs to be updated accordingly.
  
# CI/CD pipeline 
 Test suite needs to be configured besed on the technologies that team is using.
 
# Cucumber steps configuretion : 
 Cucumber steps needs to be rewrited in a way that can be used again and again later on. Indepented cucumber steps. 
 Acccesing the cucumber steps that are stored in different .js files to reuse them.
 A way to share the state between the cucumber steps needs to be configured
 
 These are the blue points that can be considered when enhencing the test suite. 
 
Thank you for your time :)

