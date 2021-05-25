import {Selector, t} from 'testcafe'
import loginPage from '../pages/loginPage'
import productListingPage from '../pages/productListingPage'
import {URL, PRODUCTS, CREDENTIALS, MESSAGES, NAMES, TITLES} from '../common/data'
import viewCartPage from '../pages/viewCartPage'
import cartInfoPage from '../pages/cartInfoPage'
import cartOverviewPage from '../pages/cartOverviewPage'
import thankYouPage from '../pages/thankYouPage'


fixture ('Cart tests')
        .page(URL.URL)
        .beforeEach( async t=> {
            await loginPage.loginToSite(CREDENTIALS.VALID_USER.USERNAME,CREDENTIALS.VALID_USER.PASSWORD) //Challenge 1
            await productListingPage.add2ProuctsToCart(PRODUCTS.LIGHT,PRODUCTS.BACKPACK) // Challenge 6
            await viewCartPage.openCart() //Challenge 4
        })

//Challenge 7
test('Missing Information', async t =>{
    await cartInfoPage.insertInfo(NAMES.FIRST_NAME,NAMES.LAST_NAME)
    await t.expect(cartInfoPage.errorMessage.innerText).eql(MESSAGES.ERROR_MSG.POSTAL_CODE_REQ)
})

//Challenge 8
test('Valid Information', async t =>{
    await cartInfoPage.insertInfo(NAMES.FIRST_NAME,NAMES.LAST_NAME,NAMES.POSTAL_CODE)
    await t.expect(cartOverviewPage.overviewTitle.innerText).eql(TITLES.CART_OVERVIEW_TITLE)
})

//Challenge 10
test('Complete a Purchase', async t =>{
    await cartInfoPage.insertInfo(NAMES.FIRST_NAME,NAMES.LAST_NAME,NAMES.POSTAL_CODE)
    await t.click(cartOverviewPage.finishBtn)
    await thankYouPage.verifyPurchaseMsgs()
    
})
