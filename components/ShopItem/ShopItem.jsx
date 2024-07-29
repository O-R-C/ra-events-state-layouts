import PropTypes from 'prop-types'
import styles from './ShopItem.module.css'

const ShopItem = ({ item }) => {
  return (
    <div className={styles['shop-item']}>
      <div className={styles['image']}>
        <img
          className={styles['img']}
          src={item.img}
          alt='item'
        />
      </div>
      <h3 className={styles['title']}>{item.name}</h3>
      <p className={styles['color']}>{item.color}</p>
      <p className={styles['price']}>{item.price}</p>
      <button className={styles['button']}>Add to cart</button>
    </div>
  )
}

ShopItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default ShopItem
