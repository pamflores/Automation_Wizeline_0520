import {Selector, t} from 'testcafe'
import productDetailPage from '../pages/productDetailPage'
import common from '../common/common'

class productListingPage{

  constructor(){
    this.PLPTitle = Selector ('.title')
    this.productLink = Selector ('.inventory_item_name')
    this.RemoveOnesie = Selector ('#remove-sauce-labs-onesie')
  }

  async addItemToCartinPDP(prod){
        await t.click(this.productLink.withText(prod))
        await productDetailPage.addItemToCart()
    }

async addProductToCart(prod,expected){
    await this.addItemToCartinPDP(prod)
    await productDetailPage.GoBackToPLP()
    await t.expect(common.cartBadge.innerText).eql(expected.toString())// Assertion adding one by one
  }

async addTheseProducts(array){
      for (var i=0; i < array.length; i++)
      {
        var expected = i + 1
        await this.addProductToCart(array[i],expected)
      }
    }
  
  async clickAddToCartPLP(text) {
      this.BtnAddToCart = Selector('.inventory_item_description')
              .withText(text)
              .child('.pricebar')
              .child('.btn_primary.btn_inventory')
      await t.click(this.BtnAddToCart)
    }

}

export default new productListingPage()
