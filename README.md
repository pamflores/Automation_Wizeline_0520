# Automation_Wizeline_0520
## Automation Exercise for Fullstack QA Certification on 05/20

### PROJECT STRUCTURE
````
├── testcafe.challenge
  │      ├── common
  │         ├── common.js
  │         ├── data.js
  │         ├── roles.js
  │      ├── pages
  │         ├── cartInfoPage.js
  │         ├── cartOverviewPage.js
  │         ├── loginPage.js
  │         ├── productDetailPage.js
  │         ├── productListingPage.js
  │         ├── thankYouPage.js
  │         ├── viewCart.js
  │       ├── tests
  │         ├── AddItems.js
  │         ├── Cart.js
  │         ├── Login.js
  └── .env
````

#### **INSTALLATION**

To download testcafe, follow instructions: https://testcafe.io/documentation/402834/guides/basic-guides/install-testcafe

To download the code, clone repo: https://github.com/pamflores/Automation_Wizeline_0520

run command npm install in the folder's route


#### **EXECUTION**

In terminal, run the following commands

npm run + command-below :

test-all-chrome - to run All tests on Chrome

test-all-safari - to run All tests on Safari

test-login-chrome - to run Login tests on Chrome

test-login-safari - to run Login tests on Safari

test-add-items-chrome - to run Add Items tests on Chrome

test-add-items-safari - to run Add Items tests on Safari

test-cart-chrome - to run Cart tests on Chrome

test-cart-safari - to run Cart tests on Safari

**For reporting purposes:**

Run first in terminal:

npm install -g testcafe-reporter-html@latest

and then run test script:

npm run test-all-chrome-reporting


#### REFERENCE

https://testcafe.io/
