import { lazy } from 'react'
const TodoList = lazy(() => import('@/views/TodoList'))
const ShoppingCart = lazy(() => import('@/views/ShoppingCart'))

const routes = [
  {
    url: '/todo-list',
    component: TodoList
  },
  {
    url: '/shopping-cart',
    component: ShoppingCart
  }
]

export default routes
