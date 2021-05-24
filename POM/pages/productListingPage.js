import {Selector, t} from 'testcafe'
import productDetailPage from '../pages/productDetailPage'
import common from '../common/common'

class productListingPage{

  constructor(){
    this.PLPTitle = Selector ('.title')
    this.productLink = Selector ('.inventory_item_name')
    this.AddOnesieToCart = Selector ('#add-to-cart-sauce-labs-onesie')
    this.RemoveOnesie= Selector ('#remove-sauce-labs-onesie')
  }

  async addItemToCart(prod){
        await t.click(this.productLink.withText(prod))
        await productDetailPage.addItemToCart()
    }

  async add2ProuctsToCart(prod1,prod2){
    await this.addItemToCart(prod1)
    await productDetailPage.GoBackToPLP()
    await t.expect(common.cartBadge.innerText).eql("1")// Assertion
    await this.addItemToCart(prod2)
    await productDetailPage.GoBackToPLP()
    await t.expect(common.cartBadge.innerText).eql("2")// Assertion
  }

}

export default new productListingPage()
