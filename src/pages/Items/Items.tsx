import { FC } from 'react'
import { CardContainer, Pagination } from './components'
import cn from 'classnames'

import styles from './Items.module.scss'
import { ICardFull, ICardResults } from '~/types/card'
import { useNavigate } from 'react-router'

const onClick = (callback: (id: string, { }: { state: ICardFull })
  => void) => (index: number, cardObject: ICardResults, id: string | number) => () => {

    callback(`/project/${id}`, { state: cardObject?.items[index] as ICardFull })
  }


const Items: FC = () => {
  const navigate = useNavigate()

  return (
    <div className={cn(styles.root)} >
      <CardContainer onCardClick={onClick(navigate)} />
      <Pagination />
    </div>
  )
}

export default Items
