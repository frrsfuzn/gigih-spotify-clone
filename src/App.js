import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './pages/login'
import Dashboard from './pages/dashboard'
import { VStack, Text, DarkMode } from "@chakra-ui/react";

function App() {
  return (
		// <DarkModeSwitch/>
		// <VStack>
		// 	<Text>Hello</Text>
		// </VStack>
		<Router>
			<Switch>
				<Route path="/create-playlist">
					<Dashboard/>
				</Route>
				<Route path="/">
					<Login/>
				</Route>
			</Switch>
		</Router>
	)
}

export default App;
