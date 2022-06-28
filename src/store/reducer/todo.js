import { TODO_ADD, TODO_TOGGLE, TODO_DELETE, TODO_VISIBILITY, TODO_CLEAR, TODO_RESET } from '../constant/todo'

const initial_state = {
  list: [{
    id: 1,
    text: '吃饭睡觉打豆豆',
    completed: false
  }, {
    id: 2,
    text: '学习React 和 Redux',
    completed: true
  },{
    id: 3,
    text: '学习Vue 和 Pinia',
    completed: false
  }],
  filter: 'All'
}

function reducer (state = initial_state, action) {
  const { payload, type } = action
  const { list } = state
  switch (type) {
    case TODO_ADD: {
      const todo_list = list.concat(payload)
      return {
        ...state,
        list: todo_list
      }
    }
    case TODO_TOGGLE: {
      const todo_list = list.map(todo => {
        if(todo.id === payload) return {...todo, completed: !todo.completed}
        return todo
      })
      return {
        ...state,
        list: todo_list
      }
    }
    case TODO_DELETE: {
      const todo_list = list.filter(todo => todo.id !== payload)
      return {
        ...state,
        list: todo_list
      }
    }
    case TODO_VISIBILITY: {
      return {
        ...state,
        filter: payload
      }
    }
    case TODO_CLEAR: {
      return {
        ...state,
        list: []
      }
    }
    case TODO_RESET: {
      return { ...initial_state }
    }
    default:
      return state
  }
}

export default reducer
