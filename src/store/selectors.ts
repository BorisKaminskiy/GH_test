import { RootState } from '~/store/store'

export const selectors = {
  getSearchParams: (state: RootState) => {
    return state.searchParams
  },
  getSearchParamsLanguage: (state: RootState) => {
    return state.searchParams.language
  },
  getSearchParamsPage: (state: RootState) => {
    return state.searchParams.page
  },
}
