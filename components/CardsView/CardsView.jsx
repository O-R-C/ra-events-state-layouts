import PropTypes from 'prop-types'
import ShopCard from '../ShopCard/ShopCard'
import styles from './CardsView.module.css'

const CardsView = ({ cards }) => {
  return (
    <div className={styles['cards-view']}>
      {cards.map((card) => (
        <ShopCard
          key={card.id}
          card={card}
        />
      ))}
    </div>
  )
}

CardsView.propTypes = {
  cards: PropTypes.array.isRequired,
}

export default CardsView
