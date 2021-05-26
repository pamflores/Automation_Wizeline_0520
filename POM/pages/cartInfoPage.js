import {Selector, t} from 'testcafe'
import viewCartPage from '../pages/viewCartPage'
import common from '../common/common'
import {TITLES} from '../common/data'
import cartOverviewPage from '../pages/cartOverviewPage'

class cartInfoPage{

  constructor(){
      this.infoTitle = Selector('.title')
      this.firstNameField = Selector('#first-name')
      this.lastNameField = Selector('#last-name')
      this.postalCodeField = Selector('#postal-code')
      this.continueBtn = Selector ('#continue')
      this.errorMessage = Selector ('.error-message-container')
  }

  async insertInfo(firstName,lastName,postalCode){
    await t.click(viewCartPage.checkoutBtn)
          .expect(this.infoTitle.innerText).eql(TITLES.CART_INFO_TITLE)// Assertion

    if(firstName != null){
      await t.typeText(this.firstNameField, firstName, {paste:true})
    }
    if(lastName != null){
      await t.typeText(this.lastNameField, lastName, {paste:true})
    }
    if(postalCode != null){
      await t.typeText(this.postalCodeField, postalCode, {paste:true})
    }

    await t.click(this.continueBtn)

  }

}
export default new cartInfoPage()
