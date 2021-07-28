const { REACT_APP_API_KEY } = process.env;

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
	const urlAPI = `https://api.giphy.com/v1/gifs/search?api_key=${REACT_APP_API_KEY}&q=${keyword}&limit=25&offset=0&rating=g&lang=en"`;
	return fetch(urlAPI)
		.then((res) => res.json())
		.then(fromApiResponseToGifs);
}
