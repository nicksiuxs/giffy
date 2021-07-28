import React from 'react';

import { Link } from 'wouter';

import './Category.css';

const Category = ({ name, options = [] }) => {
	return (
		<section className="category">
			<h2>{name}</h2>
			<ul>
				{options?.map((option, index) => {
					return (
						<li key={index}>
							<Link to={'/search/' + option}>{option}</Link>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default Category;
