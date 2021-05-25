import {Selector, t} from 'testcafe'
import common from '../common/common'
import {TITLES} from '../common/data'

class viewCartPage{

  constructor(){
      this.cartTitle = Selector ('.title')
      this.checkoutBtn = Selector ('#checkout')
  }

  async openCart(){
    await t.click(common.cartButton)
    await t.expect(this.cartTitle.innerText).eql(TITLES.VIEW_CART_TITLE)// Assertion
  }

}
export default new viewCartPage()
