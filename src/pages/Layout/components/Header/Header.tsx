import { FC, DetailedHTMLProps, HTMLAttributes } from 'react'
import cn from 'classnames'
import styles from './Header.module.scss'
import logo from '../../../../assets/img/logo.png'

interface IHeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLHeadElement>, HTMLHeadElement> {
  name?: string
}

const Header: FC<IHeaderProps> = ({ ...props }) => {
  return (
    <header className={cn(styles.root)} {...props}>
      <img src={logo} alt="logo" />
    </header>
  )
}

export default Header
