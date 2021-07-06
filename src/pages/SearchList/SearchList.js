import React from 'react';

import Gif from 'src/components/Gif/Gif';
import Loader from 'src/components/Loader/Loader';

import useGetGifs from 'src/hooks/useGeGifs';

import './SearchList.css';

const SearchList = ({ params }) => {
	const { keyword } = params;

	const { loading, gifs } = useGetGifs({ keyword });

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<div className="list-gifs">
					{gifs.map(({ id, title, url }) => (
						<Gif key={id} title={title} id={id} url={url} />
					))}
				</div>
			)}
		</>
	);
};

export default SearchList;
