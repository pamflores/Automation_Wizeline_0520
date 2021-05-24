import {Selector, t} from 'testcafe'
import viewCart from '../pages/viewCart'
import common from '../common/common'

class cartInfoPage{

  constructor(){
      this.infoTitle = Selector('.title')
      this.firstNameField = Selector('#first-name')
      this.secondNameField = Selector('#second-name')
      this.postalCodeField = Selector('#postal-code')
      this.continueBtn = Selector ('#continue')
  }

  async insertInfo(firstName,lastName,postalCode){
    await t.click(viewCart.checkoutBtn)
          .expect(this.infoTitle.innerText).eql(TITLES.CART_INFO_TITLE)// Assertion
          .typeText(this.firstNameField, firstName, {paste:true})
          .typeText(this.secondNameField, secondName, {paste:true})
          .typeText(this.postalCodeField, postalCode, {paste:true})

  }

}
export default new cartInfoPage()
