import PropTypes from 'prop-types'
import ShopItem from '../ShopItem/ShopItem'
import styles from './ListView.module.css'

const ListView = ({ items }) => {
  return (
    <div className={styles['list-view']}>
      {items.map((item) => (
        <ShopItem
          key={item.id}
          item={item}
        />
      ))}
    </div>
  )
}

ListView.propTypes = {
  items: PropTypes.array.isRequired,
}

export default ListView
