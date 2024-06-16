import { LoginPageElement } from "../PageElements/LoginPageElement"
const loginPageEle = new LoginPageElement();
export class LoginPageActions {

    enterusername(email) {
        loginPageEle.userName().type(email)

    }
    enterpassword(pwd) {
        loginPageEle.pasword().type(pwd)

    }
    signIn() {
        loginPageEle.sign().click()

    }
}