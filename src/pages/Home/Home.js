import { Link } from 'wouter';

import './Home.css';

const Home = () => {
	return (
		<div className="home">
			<h2>Los gifs más populares</h2>
			<ul>
				<li>
					<Link to="/search/pandas">Pandas</Link>
				</li>
				<li>
					<Link to="/search/ny">New York</Link>
				</li>
				<li>
					<Link to="/search/fornite">Fornite</Link>
				</li>
			</ul>
		</div>
	);
};

export default Home;
