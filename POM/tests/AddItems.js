import {Selector, t} from 'testcafe'
import loginPage from '../pages/loginPage'
import productListingPage from '../pages/productListingPage'
import common from '../common/common'
import {URL, PRODUCTS, CREDENTIALS} from '../common/data'
import cartOverviewPage from '../pages/cartOverviewPage'
import roles from '../common/roles'


fixture ('Add Items tests')
        .page(URL.URL)
        .beforeEach( async t=> {
            await t.useRole(roles.validUserRole) //Bonus 1
        })

//Challenge 5
test('Add Item to the Cart from PLP', async t =>{
   await t.click(productListingPage.AddOnesieToCart) //Needs refactor. This is very hardcoded by css :)
   await t.expect(productListingPage.RemoveOnesie.exists).ok() //Needs refactor. This is very hardcoded :)
          .expect(common.cartBadge.innerText).eql("1") // Assertion
})

// Challenge 6
test('Add Items to the Cart from PDP', async t =>{
  await productListingPage.add2ProuctsToCart(PRODUCTS.LIGHT,PRODUCTS.BACKPACK) //Assertions inside function

})

//Challenge 9
test('Items Were Added To The Cart', async t =>{
    await productListingPage.add2ProuctsToCart(PRODUCTS.LIGHT,PRODUCTS.BACKPACK)
    await t.expect(await cartOverviewPage.validateProductInCart(PRODUCTS.LIGHT)).eql(true)  //Assertion
    await t.expect(await cartOverviewPage.validateProductInCart(PRODUCTS.BACKPACK)).eql(true)  //Assertion
})
