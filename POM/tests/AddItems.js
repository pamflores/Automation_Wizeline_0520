import {Selector, t} from 'testcafe'
import loginPage from '../pages/loginPage'
import productListingPage from '../pages/productListingPage'
//import productDetailPage from '../pages/productDetailPage'
import common from '../common/common'
import {URL, TITLES, PRODUCTS, CREDENTIALS} from '../common/data'
import viewCart from '../pages/viewCart'


fixture ('Add Items tests')
        .page(URL.URL)
        .beforeEach( async t=> {
            await loginPage.loginToSite(CREDENTIALS.VALID_USER.USERNAME,CREDENTIALS.VALID_USER.PASSWORD)
        })


test('Open Cart', async t =>{
      await t.click(common.cartButton)
      await t.expect(viewCart.cartTitle.innerText).eql(TITLES.VIEW_CART_TITLE)// Assertion
})

test('Add Item to the Cart from PLP', async t =>{
   await t.click(productListingPage.AddOnesieToCart) //Needs refactor. This is very hardcoded by css  :)
   await t.expect(productListingPage.RemoveOnesie.exists).ok() //Needs refactor. This is very hardcoded :)
          .expect(common.cartBadge.innerText).eql("1") // Assertion
})

test('Add Items to the Cart from PDP', async t =>{
  await productListingPage.add2ProuctsToCart(PRODUCTS.LIGHT,PRODUCTS.BACKPACK)

})
