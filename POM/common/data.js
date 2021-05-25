import dotenv from 'dotenv'
dotenv.config()


//Bonus 2: Data Provider

export const URL ={
  URL:'https://www.saucedemo.com/'
}

export const CREDENTIALS={
    VALID_USER:{
      USERNAME:process.env.V_USERNAME,
      PASSWORD:process.env.V_PASSWORD
    },
    INVALID_USER:{
      USERNAME:process.env.I_USERNAME,
      PASSWORD:process.env.I_PASSWORD
    }

}
export const NAMES={
  FIRST_NAME: "QA",
  LAST_NAME: "CERT",
  POSTAL_CODE: "12345"
}

export const MESSAGES={
  ERROR_MSG:{
    INVALID_LOGIN:"Epic sadface: Username and password do not match any user in this service",
    POSTAL_CODE_REQ:"Error: Postal Code is required"
  },
  THANK_YOU_HEADER:"THANK YOU FOR YOUR ORDER",
  THANK_YOU_TEXT:"Your order has been dispatched, and will arrive just as fast as the pony can get there!"
}

export const TITLES={
  VIEW_CART_TITLE:"YOUR CART",
  CART_INFO_TITLE:"CHECKOUT: YOUR INFORMATION",
  CART_OVERVIEW_TITLE:"CHECKOUT: OVERVIEW",
  CART_COMPLETE: "CHECKOUT: COMPLETE!"
}

export const PRODUCTS={
  ONESIE: "Sauce Labs Onesie",
  LIGHT: "Sauce Labs Bike Light",
  BACKPACK: "Sauce Labs Backpack"
}
