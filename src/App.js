import { Link, Route } from 'wouter';
import './App.css';

import Home from 'src/pages/Home/Home';
import Detail from 'src/pages/Detail/Detail';
import SearchList from 'src/pages/SearchList/SearchList';

function App() {
	return (
		<div className="App">
			<h1 className="logo">
				<Link to="/">Giffy</Link>
			</h1>
			<Route path="/" component={Home} />
			<Route path="/search/:keyword" component={SearchList} />
			<Route path="/gif/:id" component={Detail} />
		</div>
	);
}

export default App;
