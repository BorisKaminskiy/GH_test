import { ISearchParams } from '../types/searchParam'

export const generateSearchParams = (queryObject: ISearchParams): string => {
  const keys = Object.entries(queryObject)
  const queryParams = new URLSearchParams()

  keys.map((item) => !!item[1] && queryParams.set(item[0], item[1].toString()))

  return queryParams.toString()
}
