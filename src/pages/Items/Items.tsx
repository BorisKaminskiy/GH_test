import { FC } from 'react'
import { CardContainer, Pagination } from './components'
import cn from 'classnames'

import styles from './Items.module.scss'


const Items: FC = () => {

  return (
    <div className={cn(styles.root)} >
      <CardContainer />
      <Pagination />
    </div>
  )
}

export default Items

