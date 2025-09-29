import { FC } from 'react'
import { ISvgProps } from './types'

const AuthIcon: FC<ISvgProps> = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      fill="#000"
      stroke="lightgray"
      {...props}
    >
      <svg
        width="30"
        height="32"
        viewBox="0 0 30 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 17.6667C19.6024 17.6667 23.3333 13.9357 23.3333 9.33333C23.3333 4.73096 19.6024 1 15 1C10.3976 1 6.66667 4.73096 6.66667 9.33333C6.66667 13.9357 10.3976 17.6667 15 17.6667Z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28.3333 31C28.3333 27.4638 26.9286 24.0724 24.4281 21.5719C21.9276 19.0714 18.5362 17.6667 15 17.6667C11.4638 17.6667 8.0724 19.0714 5.57191 21.5719C3.07143 24.0724 1.66667 27.4638 1.66667 31"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 17.6667C11.4638 17.6667 8.0724 19.0714 5.57191 21.5719C3.07143 24.0724 1.66667 27.4638 1.66667 31H28.3333C28.3333 27.4638 26.9286 24.0724 24.4281 21.5719C21.9276 19.0714 18.5362 17.6667 15 17.6667Z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </svg>
  )
}

export default AuthIcon
