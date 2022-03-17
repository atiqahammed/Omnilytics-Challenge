import React from "react";
import HomePage from "./HomePage";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
	return (
		<div className="container-fluid">
			<ToastContainer autoClose={1500} hideProgressBar/>
			<Switch>
				<Route path="/" exact component={HomePage} />
				<Route component={PageNotFound}/>
			</Switch>
		</div>
	);
}

export default App;