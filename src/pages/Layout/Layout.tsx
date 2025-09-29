import { FC, DetailedHTMLProps, HTMLAttributes } from 'react'
import { Header } from './components'
import { Outlet } from 'react-router'
import cn from 'classnames'
import styles from './Layout.module.scss'

interface ILayoutProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  name?: string
}

const Layout: FC<ILayoutProps> = ({ ...props }) => {
  return (
    <div className={cn(styles.root)} {...props}>
      <Header />
      <Outlet />
    </div>
  )
}

export default Layout
