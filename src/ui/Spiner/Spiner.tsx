import { FC } from 'react'
import { createPortal } from 'react-dom'
import cn from 'classnames'
import styles from './Spiner.module.scss'

const portal = document.getElementById('portal')

const Spiner: FC = () => {
  return portal
    ? createPortal(
        <div className={cn(styles.portal)}>
          <div className={cn(styles.spiner)} />
        </div>,
        portal,
      )
    : null
}

export default Spiner
