import {Selector, t} from 'testcafe'
import productDetailPage from '../pages/productDetailPage'
import common from '../common/common'

class productListingPage{

  constructor(){
    this.PLPTitle = Selector ('.title')
    this.productLink = Selector ('.inventory_item_name')
    //this.AddOnesieToCart = Selector ('#add-to-cart-sauce-labs-onesie')
    this.RemoveOnesie = Selector ('#remove-sauce-labs-onesie')
  }

  async addItemToCart(prod){
        await t.click(this.productLink.withText(prod))
        await productDetailPage.addItemToCart()
    }

  async addProductsToCart(array){

    const count = await array.count
    console.log("cuantos?")
    console.log(count)


    for(var i = 1; i <= count; i++) {
          console.log("producto:")
          console.log(array[i])
          console.log("voy a agregar producto")
          await this.addItemToCart(array[i])
          console.log("ya agregue producto")
          await t.expect(common.cartBadge.innerText).eql(1)// Assertion
    }
    //await this.addItemToCart(prod1)
    //await productDetailPage.GoBackToPLP()
    //await t.expect(common.cartBadge.innerText).eql("1")// Assertion
    //await this.addItemToCart(prod2)
    //await productDetailPage.GoBackToPLP()
    //await t.expect(common.cartBadge.innerText).eql("2")// Assertion
  }

  async clickAddToCart(text) {
      this.BtnAddToCart = Selector('.inventory_item_description')
              .withText(text)
              .child('.pricebar')
              .child('.btn_primary.btn_inventory')
      await t.click(this.BtnAddToCart)

    }


}

export default new productListingPage()
