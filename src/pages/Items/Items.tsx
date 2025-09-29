import { FC, DetailedHTMLProps, HTMLAttributes } from 'react'
import { CardContainer } from './components'


interface IItemsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  name?: string
}

const Items: FC<IItemsProps> = ({ ...props }) => {
	

  return (
    <>
			<CardContainer {...props} />
    </>
  )
}

export default Items
