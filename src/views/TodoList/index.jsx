import styles from './index.module.scss'
import { memo, useState } from 'react'
import { Input, Button, Empty, message } from 'antd'
import Todo from './components/Todo'
import { useSelector, useDispatch } from 'react-redux'
import { add_todo } from '@/store/action/todo'
import Filter from './components/Filter'

const size = 'large'

const TodoList = memo(() => {
  const [ todo, setTodo ] = useState('')
  const handleTodoChanged = (event) => {
    setTodo(event.target.value)
  }
  const todo_list = useSelector(state => {
    const { filter, list } = state.todos
    if(filter === 'All') return list
    const completed = filter === 'Completed'
    return list.filter(todo => todo.completed === completed)
  })
  const dispatch = useDispatch()
  const handleConfirm = (event) => { // 添加todo
    addTodo(todo.trim())
  }
  const handleKeyup = (event) => {
    if(event.keyCode !== 13) return
    addTodo(event.target.value.trim())
  }
  const addTodo = text => {
    if(!text) {
      message.warning('todo is required')
      return
    }
    dispatch(add_todo({
      text,
      id: Date.now(),
      completed: false
    }))
    setTodo('')
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Input
          placeholder='What next to be done?'
          value={todo} onChange={handleTodoChanged}
          className={styles.input}
          size={size}
          onKeyUp={handleKeyup}
        />
        <Button
          type='primary'
          size={size}
          onClick={handleConfirm}
        >确定</Button>
      </div>
      <div className={styles.list}>
        {
          todo_list.length > 0 ? (todo_list.map(todo => (
            <Todo key={todo.id} {...todo}/>
          ))) : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/>
        }
      </div>
      <Filter/>
    </div>
  )
})

export default TodoList
