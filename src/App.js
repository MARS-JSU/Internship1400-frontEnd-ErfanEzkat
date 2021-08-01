import React from "react";
import Toolbar from "./Components/Toolbar/Toolbar";
import {Switch,Route,BrowserRouter} from 'react-router-dom';
import Home from "./Pages/Home";
import Interest from './Pages/Interest';
import NotIntersted from './Pages/NotInterested';

function App() {
	return (
		<BrowserRouter>
			<Toolbar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/interested" component={Interest}/>
        <Route path="/not-interested" component={NotIntersted}/>
      </Switch>
		</BrowserRouter>
	);
}

export default App;
