import React, { useState, useEffect } from 'react';

import Category from '../Category/Category';

import getTrendingTerms from 'src/services/getTrendingTermsService';

const TrendingSearches = () => {
	const [trends, setTrends] = useState([]);
	useEffect(() => {
		getTrendingTerms().then(setTrends);
	}, []);
	return <Category name="Tendencias" options={trends} />;
};

export default function LazyTrending() {
	const [show, setShow] = useState(false);

	useEffect(() => {
		const onChange = (entries) => {
			const el = entries[0];
			if (el.isIntersecting) {
				setShow(true);
			}
		};

		const observer = new IntersectionObserver(onChange, {
			rootMargin: '100px',
		});

		observer.observe(document.getElementById('lazyTrending'));
	});

	return <div id="lazyTrending">{show ? <TrendingSearches /> : null}</div>;
}
