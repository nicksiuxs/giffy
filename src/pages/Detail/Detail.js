import React from 'react';
import useGlobalGifs from 'src/hooks/useGlobalGif';

import './Detail.css';

const Detail = ({ params }) => {
	const gifs = useGlobalGifs();
	console.log(gifs);
	return <div className="detail">detalle</div>;
};

export default Detail;
