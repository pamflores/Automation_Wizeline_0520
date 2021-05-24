import {Selector, t} from 'testcafe'

class common{

  constructor(){
      this.cartButton= Selector ('.shopping_cart_link')
      this.hamMenu= Selector ('#react-burger-menu-btn')
      this.logoutLink= Selector('#logout_sidebar_link')
      this.cartBadge= Selector ('.shopping_cart_badge')
  }

}
export default new common()
