import { API_KEY, API_URL } from './settings';

const fromApiResponseToGifs = (apiResponse) => {
	const { data = [] } = apiResponse;
	if (Array.isArray(data)) {
		const newGifs = data.map((file) => {
			const { images, title, id } = file;
			const { url } = images.fixed_height;
			return { title, id, url };
		});

		return newGifs;
	} else {
		return [];
	}
};

export default function getGifs({ keyword = 'Morty' } = {}) {
	const urlAPI = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=25&offset=0&rating=g&lang=en"`;
	return fetch(urlAPI)
		.then((res) => res.json())
		.then(fromApiResponseToGifs);
}
