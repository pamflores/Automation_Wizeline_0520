import dotenv from 'dotenv'
dotenv.config()

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

export const MESSAGES={
  ERROR_MSG:{
    INVALID_LOGIN:"Epic sadface: Username and password do not match any user in this service"
  }
}

export const TITLES={
  VIEW_CART_TITLE:"YOUR CART",
  CART_INFO_TITLE:"CHECKOUT: YOUR INFORMATION"
}

export const PRODUCTS={
  ONESIE: "Sauce Labs Onesie",
  LIGHT: "Sauce Labs Bike Light",
  BACKPACK: "Sauce Labs Backpack"
}
