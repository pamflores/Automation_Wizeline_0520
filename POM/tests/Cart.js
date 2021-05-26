import {Selector, t} from 'testcafe'
import loginPage from '../pages/loginPage'
import productListingPage from '../pages/productListingPage'
import {URL, PRODUCTS, CREDENTIALS, MESSAGES, NAMES, TITLES} from '../common/data'
import viewCartPage from '../pages/viewCartPage'
import cartInfoPage from '../pages/cartInfoPage'
import cartOverviewPage from '../pages/cartOverviewPage'
import thankYouPage from '../pages/thankYouPage'
import roles from '../common/roles'


fixture ('Cart tests')
        .page(URL.URL)
        .beforeEach( async t=> {
            await t.useRole(roles.validUserRole) //Bonus 1
            var prods=[PRODUCTS.LIGHT,PRODUCTS.BACKPACK]
            await productListingPage.addTheseProducts(prods)
            await viewCartPage.openCart() //Challenge 4
        })

//Challenge 7
test('Missing Information', async t =>{
    await cartInfoPage.insertInfo(NAMES.FIRST_NAME,NAMES.LAST_NAME)
    await t.expect(cartInfoPage.errorMessage.innerText).contains(MESSAGES.ERROR_MSG.POSTAL_CODE_REQ) //Assertion
})

//Challenge 8
test('Valid Information', async t =>{
    await cartInfoPage.insertInfo(NAMES.FIRST_NAME,NAMES.LAST_NAME,NAMES.POSTAL_CODE)
    await t.expect(cartOverviewPage.overviewTitle.innerText).eql(TITLES.CART_OVERVIEW_TITLE) //Assertion
})

//Challenge 10
test('Complete a Purchase', async t =>{
    await cartInfoPage.insertInfo(NAMES.FIRST_NAME,NAMES.LAST_NAME,NAMES.POSTAL_CODE)
    await t.click(cartOverviewPage.finishBtn)
    await thankYouPage.verifyPurchaseMsgs() //Assertions

})
