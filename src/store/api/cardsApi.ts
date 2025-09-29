import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { mainUrl, endpoints } from './endpoints'
import { ICardResults, ICardRequest } from '~/types/card'

export const cardsApi = createApi({
  reducerPath: 'cardsApi',

  baseQuery: fetchBaseQuery({
    baseUrl: mainUrl,
  }),

  tagTypes: ['cards'],
  endpoints: (build) => ({
    getCards: build.query<ICardResults, ICardRequest>({
      query: (values) => ({
        url: endpoints.cards(values.language, values.page),
      }),
    }),
  }),
})

export const { useGetCardsQuery } = cardsApi
