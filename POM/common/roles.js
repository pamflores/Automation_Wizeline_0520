import {Role} from 'testcafe'
import {URL, CREDENTIALS} from '../common/data'
import loginPage from '../pages/loginPage'

//Bonus 1:  Use TestCafe Roles

class roles {

      validUserRole = Role(URL.URL , async t =>{
        await loginPage.loginToSite(CREDENTIALS.VALID_USER.USERNAME,CREDENTIALS.VALID_USER.PASSWORD)
      }, { preserveUrl: true })

}

export default new roles()
