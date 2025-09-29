import { FC, DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import cn from 'classnames'
import styles from './ButtonIcon.module.scss'

interface IButtonIconProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode
  variant: 'small' | 'medium' | 'large'
  isRotate?: boolean
}

const ButtonIcon: FC<IButtonIconProps> = ({
  children,
  variant,
  isRotate,
  ...props
}) => {
  return (
    <button
      className={cn(styles.root, styles[variant], isRotate && styles.rotate)}
      {...props}
    >
      {children}
    </button>
  )
}

export default ButtonIcon
