import PropTypes from 'prop-types'
import styles from './IconSwitch.module.css'

const IconSwitch = ({ icon, onSwitch }) => {
  return (
    <div
      className={styles['icon-switch']}
      onClick={onSwitch}
    >
      {icon}
    </div>
  )
}

IconSwitch.propTypes = {
  icon: PropTypes.string.isRequired,
  onSwitch: PropTypes.func,
}

export default IconSwitch
