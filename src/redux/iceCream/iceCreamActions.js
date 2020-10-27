import { BUY_ICECREAM, STOCK_ICECREAM } from './iceCreamType'

export const buyIceCream = (number = 1) => {
  return {
    type: BUY_ICECREAM,
    payload: number
  }
}

export const stockIceCream = (number) => {
  return {
    type: STOCK_ICECREAM,
    payload: number
  }
}
