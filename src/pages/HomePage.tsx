import { ChangeEvent, useEffect, useState } from "react"
import { Pagination } from "../components/Pagination"
import { SearchInput } from "../components/SearchInput"
import { UniversitiesList } from "../components/UniversitiesList"
import { IUniversity } from "../types/IUniversity"
import { universityFetch } from "../api/universityFetch"

export const HomePage = () => {

	const [universitiesList, setUniversitiesList] = useState<IUniversity[]>([])
	const [universityName, setuniversityName] = useState<string>('Russian Federation')
	const [currentPage, setCurrentPage] = useState<number>(1)
	const [itemsPerPage, setItemsPerPage] = useState<number>(10)
	const [error, setError] = useState<string>('')
	const [isLoading, setIsLoading] = useState<boolean>(false)

	const onChangeUniversityName = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		setuniversityName(value)
	}

	const onSearch = async () => {
		try {
			setError('')
			setUniversitiesList([])
			setIsLoading(true)
			const response = await universityFetch(universityName)
			const result = await response.json()
			if (!result.length) setError('Не найдено университетов')
			setIsLoading(false)
			setUniversitiesList(result)
		} catch (error) {
			setError('Что-то пошло не так')
			console.log(error)
		}
	}

	const onChangePage = (pageNumber: number) => {
		setCurrentPage(pageNumber)
	}

	return (
		<div>
			<SearchInput
				value={universityName}
				onChange={onChangeUniversityName}
				onSearch={onSearch} />
			{isLoading ? <div>Загрузка...</div> : null}
			{!error ? <UniversitiesList
				universities={universitiesList}
				currentPage={currentPage}
				itemsPerPage={itemsPerPage} />
				: <div>{error}</div>}
			<Pagination
				numberOfPages={Math.ceil(universitiesList.length / itemsPerPage)}
				currentPage={currentPage}
				onChangePage={onChangePage} />
		</div>
	)
}