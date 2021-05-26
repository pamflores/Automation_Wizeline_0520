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

async addProductsToCart(prod,expected){
    await this.addItemToCart(prod)
    await productDetailPage.GoBackToPLP()
    await t.expect(common.cartBadge.innerText).eql(expected.toString())// Assertion adding one by one
  }

async addTheseProducts(array){
      for (var i=0; i < array.length; i++)
      {
        var expected = i + 1
        await this.addProductsToCart(array[i],expected)
      }
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
