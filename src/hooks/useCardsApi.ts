import { useAppSelector } from '~/store/store'
import { selectors } from '~/store/selectors'
import { useGetCardsQuery } from '~/store/api/cardsApi'
import axios from 'axios'
import { mainUrl, endpoints } from '~/store/api/endpoints'
import { ICardResults } from '~/types/card'
import { useEffect, useState } from 'react'


type TUserCardApi = {
	data: ICardResults | undefined
	status: number | null
	error: string | null | unknown
}


export const useCardsApi = () => {
	const searchParams = useAppSelector(selectors.getSearchParams)

	const [response, setResponse] = useState<{ data: ICardResults | undefined }>({ data: undefined })
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [error, setError] = useState<string | null>('')

	const axiosFetchData = () => {
		setIsLoading(true)
		try {
			axios.get<ICardResults>(endpoints.cards(searchParams.language, searchParams.page))
				.then(response => setResponse({ data: response.data }))
				.catch((error) => error?.message && setError(error.message))
				.finally(() => setIsLoading(false))

		}
		catch (error) {
			if (axios.isAxiosError(error)) {
				setError('Error')
			} else {
				setError(`'unexpected error: '`)

			}
		}
	}

	useEffect(() => axiosFetchData(), [searchParams])

	//функционал прииспользовании rtk-query
	// const { data, isFetching, error } = useGetCardsQuery({
	// 	language: searchParams.language,
	// 	page: searchParams.page,
	// })




	return { ...response, error, isLoading }
}