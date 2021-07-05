import { Link, Route } from 'wouter';
import './App.css';

import Home from 'src/pages/Home/Home';
import Detail from 'src/pages/Detail/Detail';
import ListOfGifs from 'src/components/ListOfGifs/ListOfGifs';

function App() {
	return (
		<div className="App">
			<h1 className="logo">
				<Link to="/">Giffy</Link>
			</h1>
			<Route path="/" component={Home} />
			<Route path="/search/:keyword" component={ListOfGifs} />
			<Route path="/gif/:id" component={Detail} />
		</div>
	);
}

export default App;
