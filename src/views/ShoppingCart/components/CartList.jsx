import { memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from '../index.module.scss'
import { delete_good, increment_good, decrement_good } from '@/store/action/shopping-cart'
import { Button, message } from 'antd'
const size = 'small'

const total_count = (list = []) => {
  return list.reduce((prev,next) => prev + next.count*1, 0)
}
const total_price = (list = []) => {
  return list.reduce((prev,next) => prev + next.count*next.price, 0)
}

const CartList = memo(() => {
  const goods = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const handleDeleteGood = (id) => {
    dispatch(delete_good(id))
  }
  const handleDecrement = (good) => {
    if(good.count === 1) {
      message.warning('数量不能小于1')
      return
    }
    dispatch(decrement_good(good.id))
  }
  const handleIncrement = (id) => {
    dispatch(increment_good(id))
  }
  return (
    <div className={styles.cart_wrapper}>
      <div className={styles.title}>购物车</div>
      { goods.length > 0 ? (
        <div>
          <div className={styles.header}>
            <span>商品</span><span>图片</span><span>单价</span><span>数量</span><span>总价</span><span>操作</span>
          </div>
          {
            goods.map(good => (
              <div key={good.id} className={styles.cart_item}>
                <div>{good.title}</div>
                <div><img src={good.url} className={styles.img} alt=''/></div>
                <div className={styles.price}>{good.price}</div>
                <div className={styles.control}>
                  <Button size={size} onClick={handleDecrement.bind(null, good)}>-</Button>
                  <span className={styles.count}>{good.count}</span>
                  <Button size={size} onClick={handleIncrement.bind(null,good.id)}>+</Button>
                </div>
                <div>{good.price * good.count}</div>
                <div><span className={styles.delete_icon} onClick={handleDeleteGood.bind(null, good.id)}>删除</span></div>
              </div>
            ))
          }
          <div className={styles.footer}>
            <span>已选择 {total_count(goods)} 件商品, </span>
            <span>总计 RMB {total_price(goods)}</span>
          </div>
        </div>
        ) : <div style={{textAlign: 'center', padding: '10px 0'}}>
          <span><svg className="ant-empty-img-simple" width="64" height="41" viewBox="0 0 64 41"><g transform="translate(0 1)" fill="none" fillRule="evenodd"><ellipse className="ant-empty-img-simple-ellipse" fill="#F5F5F5" cx="32" cy="33" rx="32" ry="7"></ellipse><g className="ant-empty-img-simple-g" fillRule="nonzero" stroke="#D9D9D9"><path d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"></path><path d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z" fill="#FAFAFA" className="ant-empty-img-simple-path"></path></g></g></svg></span>
          <div>暂无数据</div>
        </div>}
    </div>
  )
})

export default CartList
