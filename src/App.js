import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Login from './pages/login'
import Dashboard from './pages/dashboard'
import {useSelector} from 'react-redux'
import React from 'react'

function App() {
	const token= useSelector(state => state.token.value)
  return (
		<Router>
			<Switch>
				<Route path="/create-playlist">
					{token ?<Dashboard/> : <Redirect to="/"/> }
				</Route>
				<Route path="/">
					{token && <Redirect to="/create-playlist"/> }
					<Login/>
				</Route>
			</Switch>
		</Router>
	)
}

export default App;
