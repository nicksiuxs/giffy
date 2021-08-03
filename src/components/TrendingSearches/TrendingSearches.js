import React, { useState, useEffect, useRef } from 'react';

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
	const elementRef = useRef();

	useEffect(() => {
		const onChange = (entries, observer) => {
			const el = entries[0];
			console.log(el.isIntersecting);
			if (el.isIntersecting) {
				setShow(true);
				observer.disconnect();
			}
		};

		const observer = new IntersectionObserver(onChange, {
			rootMargin: '100px',
		});

		observer.observe(elementRef.current);

		return () => observer.disconnect();
	});

	return <div ref={elementRef}>{show ? <TrendingSearches /> : null}</div>;
}
