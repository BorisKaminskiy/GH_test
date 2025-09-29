import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import searchParams from './slices/searchParams/searchParams'
import { cardsApi } from './api/cardsApi'

const rootReducer = combineReducers({
  [cardsApi.reducerPath]: cardsApi.reducer,
  searchParams,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(cardsApi.middleware),
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
