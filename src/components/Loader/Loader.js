import React from 'react';

import { ReactComponent as Spinner } from 'src/img/smile.svg';

import './Loader.css';

const Loader = () => {
	return (
		<div className="loader">
			<Spinner />
		</div>
	);
};

export default Loader;
