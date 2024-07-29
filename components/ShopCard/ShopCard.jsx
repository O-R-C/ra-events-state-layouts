import PropTypes from 'prop-types'
import styles from './ShopCard.module.css'

const ShopCard = ({ card }) => {
  return (
    <div className={styles['shop-card']}>
      <h3 className={styles['title']}>{card.name}</h3>
      <p className={styles['color']}>{card.color}</p>
      <div className={styles['image']}>
        <img
          src={card.img}
          alt='card'
        />
      </div>
      <div className={styles['footer']}>
        <p className={styles['price']}>{card.price}</p>
        <button className={styles['button']}>Add to cart</button>
      </div>
    </div>
  )
}

ShopCard.propTypes = {
  card: PropTypes.object.isRequired,
}

export default ShopCard
