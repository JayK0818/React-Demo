import todo_reducer from './reducer/todo'
import shopping_cart_reducer from './reducer/shopping-cart'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    todos: todo_reducer,
    cart: shopping_cart_reducer
  }
})

export default store
