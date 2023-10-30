import { ChangeEvent, MouseEventHandler } from "react"

type IProps = {
	value: string
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
	onSearch: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const SearchInput = ({ value, onChange, onSearch }: IProps) => {
	return (
		<>
			<input placeholder="Страна" type="text" value={value} onChange={onChange} />
			<button type="button" title="Поиск" onClick={onSearch}>Поиск</button>
		</>
	)
}