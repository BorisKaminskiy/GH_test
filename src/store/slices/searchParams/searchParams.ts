import { createSlice } from '@reduxjs/toolkit'
import { ISearchParams } from '~/types/searchParam'

const initialState: ISearchParams = {
  language: 'typescript',
  page: 1,
}

const searchParams = createSlice({
  name: 'searchParams',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload
    },
    setPage: (state, action) => {
      state.page = action.payload
    },
  },
})

export const { setLanguage, setPage } = searchParams.actions
export default searchParams.reducer
