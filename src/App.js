import { Link, Route } from 'wouter';
import './App.css';

import Home from 'src/pages/Home/Home';
import Detail from 'src/pages/Detail/Detail';
import SearchList from 'src/pages/SearchList/SearchList';

import StaticContext from 'src/context/StaticContext';
import { GifsContextProvider } from 'src/context/GifsContext';

function App() {
	return (
		<StaticContext.Provider value={{ name: 'Nicolas' }}>
			<div className="App">
				<h1 className="logo">
					<Link to="/">Giffy</Link>
				</h1>
				<GifsContextProvider>
					<Route path="/" component={Home} />
					<Route path="/search/:keyword" component={SearchList} />
					<Route path="/gif/:id" component={Detail} />
				</GifsContextProvider>
			</div>
		</StaticContext.Provider>
	);
}

export default App;
