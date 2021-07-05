import React, { useState, useEffect } from 'react';

import Gif from 'src/components/Gif/Gif';

import getGifs from 'src/services/getGifs.js';

import './ListOfGifs.css';

const ListOfGifs = () => {
	const keyword = 'foxes';

	const [gifs, setGifs] = useState([]);
	useEffect(() => {
		getGifs({ keyword }).then((res) => setGifs(res));
	}, [keyword]);
	return (
		<div className="list-gifs">
			{gifs.map(({ id, title, url }) => (
				<Gif key={id} title={title} id={id} url={url} />
			))}
		</div>
	);
};

export default ListOfGifs;
