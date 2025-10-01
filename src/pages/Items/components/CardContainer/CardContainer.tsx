import { FC, DetailedHTMLProps, HTMLAttributes } from 'react'
import { useCardsApi } from '~/hooks/useCardsApi'
import { normalizeCardShortData } from '~/utils/normalizeCardShortData'
import { ICardResults } from '~/types/card'
import { Card } from '~/components'
import { Spiner, Typography } from '~/ui'
import cn from 'classnames'
import styles from './CardContainer.module.scss'

interface ICardContainerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  onCardClick: (index: number, cardObject: ICardResults, id: string | number) => () => void
}

const CardContainer: FC<ICardContainerProps> = ({ onCardClick }: ICardContainerProps) => {
  const { data, isLoading, error } = useCardsApi()

  return (
    <div className={cn(styles.root)}>
      {isLoading && <Spiner />}
      {error && <div className={cn(styles.error)}> <Typography variant="t30b">{error}</Typography></div>}

      {data && !error && <div className={cn(styles.wrapper)}>
        <div className={cn(styles.container)}>

          {data.items.map((item, index) => (
            <Card
              onClick={onCardClick(index, data, item.id)}
              cardData={normalizeCardShortData(item)}
              key={item.id}
            />
          ))}
        </div>
      </div>}
    </div>
  )
}

export default CardContainer
