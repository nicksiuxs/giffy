import React from 'react';
import useGlobalGifs from 'src/hooks/useGlobalGif';

import './Detail.css';

const Detail = ({ params }) => {
	const gifs = useGlobalGifs();

	const gif = gifs.find((singleGif) => singleGif.id === params.id);

	return (
		<div className="detail">
			<img src={gif.url} />
			<h2>{gif.title}</h2>
		</div>
	);
};

export default Detail;
