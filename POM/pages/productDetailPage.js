import {Selector, t} from 'testcafe'
import productListingPage from '../pages/productListingPage'

class productDetailPage{

  constructor(){
    this.PDPTitle = Selector ('.title')
    this.BackToPLP = Selector ('#back-to-products')
    this.AddToCartBtn = Selector ('.btn_inventory')
  }

  async GoBackToPLP(){
    await t.click(this.BackToPLP)
    await t.expect(productListingPage.PLPTitle.exists).ok() //Assertion
  }

  async addItemToCart(){
    await t.click(this.AddToCartBtn)
    await t.expect(await this.AddToCartBtn.innerText).eql("REMOVE") //Assertion
    //Added double await because with only one, it was not "seeing" the REMOVE text

  }

}

export default new productDetailPage()
