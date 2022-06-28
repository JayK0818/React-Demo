import { ADD_GOOD, DELETE_GOOD, INCREMENT_GOOD, DECREMENT_GOOD } from '../constant/shopping-cart'

const add_good = (payload) => ({type: ADD_GOOD, payload})
const delete_good = (payload) => ({type: DELETE_GOOD, payload})
const increment_good = (payload) => ({type: INCREMENT_GOOD, payload})
const decrement_good = (payload) => ({type: DECREMENT_GOOD, payload})

export {
  add_good,
  delete_good,
  increment_good,
  decrement_good
}
