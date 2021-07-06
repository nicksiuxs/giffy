import React from 'react';

import Loader from 'src/components/Loader/Loader';
import ListOfGifs from 'src/components/ListOfGifs/ListOfGifs';

import useGetGifs from 'src/hooks/useGeGifs';

import './SearchList.css';

const SearchList = ({ params }) => {
	const { keyword } = params;

	const { loading, gifs } = useGetGifs({ keyword });

	return <>{loading ? <Loader /> : <ListOfGifs gifs={gifs} />}</>;
};

export default SearchList;
