
export const fetchDataFromApi = async (url1, url2=undefined) => {
	const [ response1, response2 ] = await Promise.all([fetch(url1), fetch(url2)]);
	const result1 = await response1.json();
	const result2 = await response2.json();
	return ({ result1, result2 });
}
