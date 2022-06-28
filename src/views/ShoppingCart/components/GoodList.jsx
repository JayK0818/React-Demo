import styles from '../index.module.scss'
import { memo } from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'antd'
import { add_good } from '@/store/action/shopping-cart'

const goods_list = [
  {
    url: require('../images/phone.jpeg'),
    price: '7999',
    description: 'iPhone巅峰之作',
    title: 'iPhone13 Pro',
    id: 1,
  },
  {
    url: require('../images/mac.png'),
    price: '9499',
    description: 'M2 芯片机型',
    title: 'MacBook Air',
    id: 2,
  },
  {
    url: require('../images/watch.jpeg'),
    price: '2999',
    title: 'Apple Watch',
    description: '全天候视网膜显示屏',
    id: 3,
  },
  {
    url: require('../images/pods.png'),
    price: '1399',
    title: 'AirPods',
    description: '第三代',
    id: 4,
  },
  {
    url: require('../images/pods-max.png'),
    price: '4399',
    title: 'AirPods Max',
    description: '主动降噪与通透模式',
    id: 5,
  },
  {
    url: require('../images/pad.png'),
    price: '4399',
    description: '凭实力出彩',
    title: 'iPad Air',
    id: 8,
  }
]
const GoodList = memo(() => {
  const dispatch = useDispatch()
  const handleAddGood = (good) => {
    dispatch(add_good({...good}))
  }
  return (
    <div className={styles.goods_list}>
      { goods_list.length > 0 && goods_list.map(good => (
          <div key={good.id} className={styles.good_item}>
            <img src={good.url} alt=''/>
            <div className={styles.title}>{good.title}</div>
            <div className={styles.description}>{good.description}</div>
            <div className={styles.price}>{good.price}</div>
            <div>
              <Button
                onClick={handleAddGood.bind(null, good)}
                type="link"
              >购买</Button>
            </div>
          </div>
        ))
      }
    </div>
  )
})
export default GoodList
