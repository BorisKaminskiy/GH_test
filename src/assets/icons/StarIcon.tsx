import { FC } from 'react'
import { ISvgProps } from './types'

const StarIcon: FC<ISvgProps> = ({ ...props }) => {
  return (
    <svg width="34" height="32" viewBox="0 0 34 32" fill="#3C8B3A" {...props}>
      <path d="M6.70833 32L9.41666 20.2917L0.333328 12.4167L12.3333 11.375L17 0.333344L21.6667 11.375L33.6667 12.4167L24.5833 20.2917L27.2917 32L17 25.7917L6.70833 32Z" />
    </svg>
  )
}

export default StarIcon
