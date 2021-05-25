import {Selector, t} from 'testcafe'
//import common from '../common/common'
import {TITLES,MESSAGES} from '../common/data'

class thankYouPage{

  constructor(){
      this.thanksTitle = Selector ('.title')
      this.thanksHeader = Selector ('.complete-header')
      this.thanksMessage = Selector ('.complete-text')

  }

  async verifyPurchaseMsgs(){
    //Assertions
    await t.expect(this.thanksTitle.innerText).eql(TITLES.CART_COMPLETE)
    await t.expect(this.thanksHeader.innerText).eql(MESSAGES.THANK_YOU_HEADER)
    await t.expect(this.thanksMessage.innerText).eql(MESSAGES.THANK_YOU_TEXT)
  }

}
export default new thankYouPage()
