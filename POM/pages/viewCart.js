import {Selector, t} from 'testcafe'
import common from '../common/common'

class viewCart{

  constructor(){
      this.cartTitle = Selector ('.title')
  }

  async openCart(){
    await t.click(common.cartButton)
    await t.expect(this.cartTitle.innerText).eql(TITLES.VIEW_CART_TITLE)// Assertion
  }

}
export default new viewCart()
