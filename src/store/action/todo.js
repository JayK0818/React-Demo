import { TODO_ADD, TODO_TOGGLE, TODO_DELETE, TODO_VISIBILITY, TODO_CLEAR, TODO_RESET } from '../constant/todo'

const toggle_todo = (payload) => ({type: TODO_TOGGLE, payload})
const add_todo = (payload) => ({type: TODO_ADD, payload})
const delete_todo = (payload) => ({type: TODO_DELETE, payload})
const toggle_todo_visibility = (payload) => ({type: TODO_VISIBILITY, payload})
const clear_todo = () => ({type: TODO_CLEAR})
const reset_todo = () => ({type: TODO_RESET})

export {
  toggle_todo,
  add_todo,
  delete_todo,
  clear_todo,
  reset_todo,
  toggle_todo_visibility
}
