import React from 'react';
import Gif from 'src/components/Gif/Gif';

import './ListOfGifs.css';

const ListOfGifs = ({ gifs }) => {
	return (
		<div className="list-gifs">
			{gifs.map(({ id, title, url }) => (
				<Gif key={id} title={title} id={id} url={url} />
			))}
		</div>
	);
};

export default ListOfGifs;
