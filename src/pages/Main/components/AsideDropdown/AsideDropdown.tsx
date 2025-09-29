import { FC, DetailedHTMLProps, HTMLAttributes, ReactElement } from 'react'
import { useAppDispatch, useAppSelector } from '~/store/store'
import { selectors } from '~/store/selectors'
import { setLanguage, setPage } from '~/store/slices/searchParams/searchParams'
import { IDropdownItem } from '~/types/dropdown'
import { Dropdown } from '~/components'
import { languagesItems } from './languagesItems'

interface IAsideDropdownProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  name?: string
}

const AsideDropdown: FC<IAsideDropdownProps> = ({ ...props }): ReactElement => {
  const dispatch = useAppDispatch()
  const language = useAppSelector(selectors.getSearchParamsLanguage)

  const onDropdownItemClick = (value: IDropdownItem) => {
    dispatch(setLanguage(value.title))
    dispatch(setPage(1))
  }

  return (
    <Dropdown
      activeItem={language}
      values={languagesItems}
      onValueChange={onDropdownItemClick}
      {...props}
    />

  )
}

export default AsideDropdown
