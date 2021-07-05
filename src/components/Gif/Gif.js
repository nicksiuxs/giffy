import React from 'react';
import './Gif.css';

const Gift = ({ title, id, url }) => {
	return (
		<a href={`#${id}`} className="gif">
			<img src={url} alt={title} />
			<h4>{title}</h4>
		</a>
	);
};

export default Gift;