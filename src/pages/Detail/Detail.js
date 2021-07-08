import React, { useContext } from 'react';
import GifsContext from 'src/context/GifsContext';

import './Detail.css';

const Detail = ({ params }) => {
	const context = useContext(GifsContext);
	console.log(context);
	return <div className="detail">detalle</div>;
};

export default Detail;
