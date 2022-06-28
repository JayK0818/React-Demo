import { Fragment } from 'react'
import GoodList from './components/GoodList'
import CartList from './components/CartList'

function ShoppingCart() {
  return (
    <Fragment>
      <GoodList/>
      <CartList/>
    </Fragment>
  )
}

export default ShoppingCart
