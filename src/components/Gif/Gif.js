import React from 'react';
import { Link } from 'wouter';
import './Gif.css';

const Gift = ({ title, id, url }) => {
	return (
		<Link to={`/gif/${id}`} className="gif">
			<img loading="lazy" src={url} alt={title} />
			<h4>{title}</h4>
		</Link>
	);
};

export default Gift;
