import { Route } from 'wouter';
import './App.css';
import ListOfGifs from 'src/components/ListOfGifs/ListOfGifs';

function App() {
	return (
		<div className="App">
			<h1>Giffy</h1>
			<Route path="/search/:keyword" component={ListOfGifs} />
		</div>
	);
}

export default App;
