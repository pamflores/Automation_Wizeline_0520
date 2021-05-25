import {Selector, t} from 'testcafe'
import common from '../common/common'
import {TITLES} from '../common/data'

class cartOverviewPage{

  constructor(){
      this.overviewTitle = Selector ('.title')
      this.productTitle = Selector ('.inventory_item_name')
      this.finishBtn = Selector ('#finish')
  }

  async validateProductInCart(product){
    //Validate if item exits in the cart
        const count = await this.productTitle.count;
        let found = false;
        for(var i = 0; i < count; i++) {
            const title = await this.productTitle.nth(i).innerText;
            if (title.match(product)) {
                found = true; //if the title of the item name is the same as the argument's item, then it was found.
            }
        }
    return found
  }

}
export default new cartOverviewPage()
