import { useEffect, useState } from "react"

type IProps = {
	numberOfPages: number
	currentPage: number
	onChangePage: (pageNumber: number) => void
}

export const Pagination = ({ numberOfPages, currentPage, onChangePage }: IProps) => {

	const [pages, setPages] = useState<number[]>([])

	useEffect(() => {
		const pages: number[] = []
		for (let i = 1; i <= numberOfPages; i++) {
			pages.push(i);
		}
		setPages(pages)
	}, [numberOfPages])

	return (
		<div>
			{pages.map(pageNumber => (
				<button
					key={pageNumber}
					onClick={() => onChangePage(pageNumber)}
					className={pageNumber === currentPage ? 'active' : ''}>
					{pageNumber}
				</button>
			))}
		</div>
	)
}