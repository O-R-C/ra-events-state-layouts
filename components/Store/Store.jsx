import { useState } from 'react'
import PropTypes from 'prop-types'
import IconSwitch from '../IconSwitch/IconSwitch'
import CardsView from '../CardsView/CardsView'
import ListView from '../ListView/ListView'
import styles from './Store.module.css'

const Store = ({ products }) => {
  const [iconSwitch, setIconSwitch] = useState(false)

  return (
    <div className={styles.store}>
      <IconSwitch
        icon={iconSwitch ? 'view_module' : 'view_list'}
        onSwitch={() => setIconSwitch(!iconSwitch)}
      />
      {(iconSwitch && <ListView items={products} />) || <CardsView cards={products} />}
    </div>
  )
}

Store.propTypes = {
  products: PropTypes.array.isRequired,
}

export default Store
