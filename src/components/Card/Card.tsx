import { FC, DetailedHTMLProps, HTMLAttributes } from 'react'
import { ICardShort } from '~/types/card'
import { Typography } from '~/ui'
import { StarIcon } from '~/assets/icons'
import cn from 'classnames'
import styles from './Card.module.scss'

interface ICardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  cardData: ICardShort
}

const Card: FC<ICardProps> = ({ cardData, ...props }) => {
  return (
    <div className={cn(styles.root)} {...props}>
      <div className={cn(styles.header)}>
        <img width={30} height={30} src={cardData.avatar_url} alt="avatar" />
        {cardData.owner && (
          <Typography variant="t14">{cardData.name}</Typography>
        )}
      </div>
      <div className={cn(styles.body)}>
        <StarIcon />
        <Typography variant="t18b">{cardData.stargazers_count}</Typography>
      </div>
    </div>
  )
}

export default Card
