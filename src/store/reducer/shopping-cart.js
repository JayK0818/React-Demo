import { ADD_GOOD, DELETE_GOOD, INCREMENT_GOOD, DECREMENT_GOOD } from '../constant/shopping-cart'

function reducer(state = [], action) {
  const { type, payload } = action
  switch(type) {
    case ADD_GOOD: {
      // 判断是否已经添加过, 如果没有添加则新增, 否则新增数量
      const index = state.findIndex(good => good.id === payload.id)
      if(index === -1) {
        return [...state, {...payload, count: 1}]
      }
      const goods_list = [...state]
      goods_list[index]['count'] += 1
      return goods_list
    }
    case DELETE_GOOD: {
      return state.filter(good => good.id !== payload)
    }
    case INCREMENT_GOOD: {
      const index = state.findIndex(good => good.id === payload)
      if(index < 0) return [...state]
      const goods_list = [...state]
      goods_list[index]['count'] += 1
      return goods_list
    }
    case DECREMENT_GOOD: {
      const index = state.findIndex(good => good.id === payload)
      if(index < 0) return [...state]
      const goods_list = [...state]
      goods_list[index]['count'] -= 1
      return goods_list
    }
    default:
      return state
  }
}

export default reducer
