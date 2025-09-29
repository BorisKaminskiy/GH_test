import { FC, DetailedHTMLProps, HTMLAttributes, useState } from 'react'
import { IDropdownItem } from '~/types/dropdown'
import { Typography, ButtonIcon } from '~/ui'
import { ArrowIcon } from '~/assets/icons'
import cn from 'classnames'
import styles from './Dropdown.module.scss'

interface IDropdownProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  activeItem: string
  values: IDropdownItem[]
  onValueChange: (value: IDropdownItem) => void
}

const Dropdown: FC<IDropdownProps> = ({
  activeItem,
  values,
  onValueChange,
  ...props
}) => {
  const [activeValue, setActiveValue] = useState<string>(activeItem)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const onHeaderButtonClick = () => setIsOpen((prevState) => !prevState)

  const onValueClick = (value: IDropdownItem) => () => {
    setActiveValue(value.title)
    onValueChange(value)
    setIsOpen(false)
  }

  return (
    <div className={cn(styles.root)} {...props}>
      {activeValue && (
        <div className={cn(styles.header)}>
          <div className={cn(styles.title)} key={activeValue}>
            <Typography variant="t30b" isCapitalize>
              {activeValue}
            </Typography>
          </div>

          <ButtonIcon
            onClick={onHeaderButtonClick}
            isRotate={isOpen}
            variant="medium"
          >
            <ArrowIcon />
          </ButtonIcon>
        </div>
      )}
      {isOpen && (
        <div className={cn(styles.container)}>
          {values.map((item) => (
            <div
              onClick={onValueClick(item)}
              className={cn(
                styles.item,
                item.title === activeValue && styles.item_active,
              )}
              key={item.id}
            >
              <Typography variant="t24b" isCapitalize>
                {item.title}
              </Typography>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Dropdown
