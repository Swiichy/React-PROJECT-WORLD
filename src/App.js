import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from './pages/About';
import home from './pages/Home';
import NotFound from './pages/NotFound';
const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={home} />
				<Route path="/about" exact component={About} />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;