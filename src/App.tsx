import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Login from './pages/login'
import Dashboard from './pages/dashboard'
import { useAppSelector } from "./app/hooks";
import React from 'react'

function App(): JSX.Element {
	const token= useAppSelector(state => state.token.value)
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
