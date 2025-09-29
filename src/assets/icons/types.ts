import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface ISvgProps
  extends DetailedHTMLProps<HTMLAttributes<SVGSVGElement>, SVGSVGElement> {
  width?: number | string
  height?: number | string
  variant?: string
}
