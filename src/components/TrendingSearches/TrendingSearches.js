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

export default TrendingSearches;
