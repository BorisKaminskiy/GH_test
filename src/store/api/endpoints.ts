// export const mainUrl = import.meta.env.VITE_BASE_URL
export const mainUrl = 'https://api.github.com'

export const endpoints = {
  cards: (language: string, page: number) =>
    mainUrl +
    `/search/repositories?q=language:${language}&sort=stars&page=${page}&per_page=12`,
}
