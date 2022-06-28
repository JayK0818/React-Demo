import { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../index.module.scss'
import { toggle_todo_visibility, clear_todo, reset_todo } from '@/store/action/todo'

const filters = ['All', 'Active', 'Completed']


const Filter = memo(() => {
  const unfinished_todo_length = useSelector(state => state.todos.list).filter(todo => !todo.completed).length
  const filter = useSelector(state => state.todos.filter)
  const dispatch = useDispatch()
  const handleToggle = (f) => {
    dispatch(toggle_todo_visibility(f))
  }
  const handleClearTodo = () => {
    dispatch(clear_todo())
  }
  const handleResetTodo = () => {
    dispatch(reset_todo())
  }
  return (
    <div className={styles.filter_wrapper}>
      <span className={styles.tip}>{unfinished_todo_length > 0 ? unfinished_todo_length : 'No' } items left</span>
      <span className={styles.filter_items}>
      {
        filters.map(f => (
          <i
            key={f}
            className={[styles.filter_item, f === filter ? styles.active : ''].join(' ')}
            onClick={handleToggle.bind(null, f)}
          >{f}</i>
        ))
      }
      </span>
      <span className={styles.clear_text} onClick={handleClearTodo}>Clear</span>
      <span className={styles.clear_text} onClick={handleResetTodo}>Reset</span>
    </div>
  )
})

export default Filter

