import { memo } from 'react'
import { Checkbox } from 'antd'
import styles from '../index.module.scss'
import { CloseOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import { toggle_todo, delete_todo } from '@/store/action/todo'

const Todo = memo(({id, completed, text}) => {
  const dispatch = useDispatch()
  const handleToggle = () => {
    dispatch(toggle_todo(id))
  }
  const handleDeleteTodo = () => {
    dispatch(delete_todo(id))
  }
  return (
    <li className={styles.todo_item} onClick={handleToggle}>
      <Checkbox checked={completed}/>
      <span className={[styles.text, completed ? styles.active : ''].join(' ')}>{text}</span>
      <span className={styles.icon} onClick={handleDeleteTodo}><CloseOutlined/></span>
    </li>
  )
})

export default Todo
