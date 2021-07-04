import { useEffect, useState } from 'react';
import './App.css';

const apiKey = 'UkMGUnKzhz34irLeeI5dSO2YGC5j1wts';

function App() {
	const [gifs, setGifs] = useState([]);
	const keyword = 'pandas';
	const urlAPI = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en"`;
	useEffect(() => {
		fetch(urlAPI)
			.then((res) => res.json())
			.then((response) => {
				const data = response.data;
				const newGifs = data.map((file) => {
					// console.log(file.images.fixed_height.url);
					return file.images.fixed_height.url;
				});
				setGifs(newGifs);
			});
	}, []);
	return (
		<div className="App">
			<h1>Giffy</h1>
			{gifs.map((gif, index) => {
				return <img key={index} src={gif} alt="gifs" />;
			})}
		</div>
	);
}

export default App;
