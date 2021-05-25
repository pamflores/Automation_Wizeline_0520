import {Selector, t} from 'testcafe'
import loginPage from '../pages/loginPage'
import productListingPage from '../pages/productListingPage'
import common from '../common/common'
import {URL, CREDENTIALS, MESSAGES} from '../common/data'

fixture ('Login tests')
      .page(URL.URL)

//Challenge 1
test('User can login with valid credentials', async t =>{
      await loginPage.loginToSite(CREDENTIALS.VALID_USER.USERNAME,CREDENTIALS.VALID_USER.PASSWORD)
      await t.expect(productListingPage.PLPTitle.exists).ok()
})

//Challenge 2
test('User cannot login with invalid credentials', async t =>{
      await loginPage.loginToSite(CREDENTIALS.INVALID_USER.USERNAME,CREDENTIALS.INVALID_USER.PASSWORD)
      await t.
            expect(loginPage.errorMessage.exists).ok()
            .expect(loginPage.errorMessage.innerText).contains(MESSAGES.ERROR_MSG.INVALID_LOGIN)
})

//Challenge 3
test('User can logout', async t =>{
      await loginPage.loginToSite(CREDENTIALS.VALID_USER.USERNAME,CREDENTIALS.VALID_USER.PASSWORD)
      await t.expect(productListingPage.PLPTitle.exists).ok()
            .click(common.hamMenu)
            .click(common.logoutLink)
            .expect(loginPage.loginTitle.exists).ok()
})
