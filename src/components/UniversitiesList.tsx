import { useEffect, useMemo, useState } from "react"
import { IUniversity } from "../types/IUniversity"

type IProps = {
	universities: IUniversity[]
	currentPage: number
	itemsPerPage: number
}

export const UniversitiesList = ({ universities, currentPage, itemsPerPage }: IProps) => {

	const [visibleList, setVisibleList] = useState<IUniversity[]>([])

	useEffect(() => {
		const start = (itemsPerPage * (currentPage - 1))
		const end = (start + itemsPerPage)
		setVisibleList(universities.slice(start, end))
	}, [universities, currentPage, itemsPerPage])

	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>University name</th>
						<th>Country code</th>
						<th>Domains</th>
					</tr>
				</thead>
				<tbody>
					{visibleList.map(university => (
						<tr key={university.name}>
							<td>{university.name}</td>
							<td>{university.alpha_two_code}</td>
							<td>{university.domains.map(d => <a href={`https://${d}`} target="_blank"> {d} </a>)}</td>
						</tr>
					)
					)}
				</tbody>
			</table>
		</div>
	)
}