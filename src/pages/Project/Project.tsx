import { FC, DetailedHTMLProps, HTMLAttributes } from 'react'
import { useNavigate, useLocation } from 'react-router'
import { ArrowIcon } from '~/assets/icons'
import { ButtonIcon, Typography } from '~/ui'
import { ICardFull } from '~/types/card'
import cn from 'classnames'
import styles from './Project.module.scss'

interface IProjectProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  name?: string
}

const Project: FC<IProjectProps> = ({ ...props }) => {
  const data = useLocation().state as ICardFull
  const navigate = useNavigate()

  const onBackClick = () => {
    navigate('/items')
  }

  return (
    <div className={cn(styles.root)} {...props}>
      <div className={cn(styles.back)}>
        <div className={cn(styles.back_button)}>
          <ButtonIcon onClick={onBackClick} variant="medium">
            <ArrowIcon />
          </ButtonIcon>
        </div>
        <Typography variant="t24b">Back to search...</Typography>
      </div>
      <div className={cn(styles.container)}>
        <Typography variant="t24b">Id {data.id}</Typography>
        <div className={cn(styles.info)}>
          {Object.entries(data).map((item, index) => (
            <span key={index}>
              {(typeof item[1] === 'string' || typeof item[1] === 'number') && (
                <Typography variant="t14">
                  {item[0]}:{item[1]}
                </Typography>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Project
