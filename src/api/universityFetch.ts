export const universityFetch = (country: string) => {

	const myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");

	const url = new URL('search', 'http://universities.hipolabs.com/')

	const parameters = encodeURI(country)
	url.searchParams.set('country', country)

	interface requestOptionsTypes {
		method: string,
		headers: Headers
	}

	const requestOptions: requestOptionsTypes = {
		method: 'GET',
		headers: myHeaders,
	};

	return fetch(url, requestOptions)

}