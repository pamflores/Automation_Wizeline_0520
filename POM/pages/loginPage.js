import {Selector, t} from 'testcafe'

class loginPage{

  constructor(){
    this.userNameField = Selector ('#user-name')
    this.passwordField = Selector ('#password')
    this.loginButton = Selector ('#login-button')
    this.errorMessage = Selector ('.error-message-container')
    this.loginTitle = Selector ('.login_logo')
  }

async loginToSite(username,password){
  await t.
        typeText(this.userNameField, username, {paste:true})
        .typeText(this.passwordField, password, {paste:true})
        .click(this.loginButton)
  }

}

export default new loginPage()
