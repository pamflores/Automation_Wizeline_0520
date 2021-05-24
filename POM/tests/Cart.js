import {Selector, t} from 'testcafe'
import loginPage from '../pages/loginPage'
import productListingPage from '../pages/productListingPage'
//import productDetailPage from '../pages/productDetailPage'
import common from '../common/common'
import {URL, TITLES, PRODUCTS, CREDENTIALS} from '../common/data'
import viewCart from '../pages/viewCart'


fixture ('Cart tests')
        .page(URL.URL)
        .beforeEach( async t=> {
            await loginPage.loginToSite(CREDENTIALS.VALID_USER.USERNAME,CREDENTIALS.VALID_USER.PASSWORD)
            await productListingPage.add2ProuctsToCart(PRODUCTS.LIGHT,PRODUCTS.BACKPACK)
            await viewCart.openCart()
        })


test('Open Cart', async t =>{

})
