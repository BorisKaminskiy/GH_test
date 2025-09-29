import { ICardFull, ICardShort } from '../types/card'

export const normalizeCardShortData = (data: ICardFull): ICardShort => {
  return {
    id: data.id,
    name: data.name,
    owner: data.owner,
    avatar_url: data.owner.avatar_url,
    description: data.description,
    stargazers_count: data.stargazers_count,
  }
}
