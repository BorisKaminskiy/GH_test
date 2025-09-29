import { DetailedHTMLProps, FC, ReactNode, HTMLAttributes } from 'react'
import cn from 'classnames'
import styles from './Typography.module.scss'

interface ITypographyProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  variant: 't10' | 't14' | 't14_130' | 't18b' | 't24b' | 't30b'
  children: ReactNode
  isUppercase?: boolean
  isCapitalize?: boolean
  isCenter?: boolean
  isRight?: boolean
  isJustify?: boolean
  isBold?: boolean
}

const Typography: FC<ITypographyProps> = ({
  variant,
  color,
  children,
  isUppercase,
  isCapitalize,
  isRight,
  isCenter,
  isJustify,
  ...props
}): JSX.Element => {
  return (
    <span
      style={{
        color: color ? `var(--${color})` : 'inherit',
        textTransform:
          (isUppercase && 'uppercase') ||
          (isCapitalize && 'capitalize') ||
          'none',
        textAlign:
          (isRight && 'right') ||
          (isCenter && 'center') ||
          (isJustify && 'justify') ||
          'left',
      }}
      className={cn(styles.root, styles[variant])}
      {...props}
    >
      {children}
    </span>
  )
}

export default Typography
