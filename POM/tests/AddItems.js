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
test('Add One Item to the Cart from PLP', async t =>{
  await productListingPage.clickAddToCartPLP(PRODUCTS.ONESIE)
  await t.expect(productListingPage.RemoveOnesie.exists).ok() // Assertion
         .expect(common.cartBadge.innerText).eql("1") // Assertion
  // Challenge 9
  // Check Items were added to the cart
      await t.expect(await cartOverviewPage.validateProductInCart(PRODUCTS.ONESIE)).eql(true)  //Assertion
})

  // Challenge 6
test('Add Multiple Items to the Cart from PDP', async t =>{
    var prods=[PRODUCTS.LIGHT,PRODUCTS.BACKPACK,PRODUCTS.ONESIE]
    await productListingPage.addTheseProducts(prods)
    await t.expect(common.cartBadge.innerText).eql(prods.length.toString())
// Challenge 9
// Check Items were added to the cart
    await t.expect(await cartOverviewPage.validateProductInCart(PRODUCTS.LIGHT)).eql(true)  //Assertion
    await t.expect(await cartOverviewPage.validateProductInCart(PRODUCTS.BACKPACK)).eql(true)  //Assertion
    await t.expect(await cartOverviewPage.validateProductInCart(PRODUCTS.ONESIE)).eql(true)  //Assertion
})
