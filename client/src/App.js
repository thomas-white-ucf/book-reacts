import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
// import MainContainer from './components/MainContainer';
import AppBar from '@material-ui/core/AppBar';
/* <div className="App"></div> */
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';
import NavBar from './components/NavBar';
// import Posts from './components/Posts'
// <Posts/>

class App extends Component {
	render() {
		return (
			<div className="App">
				<div>
					<div>
						<div>
							<AppBar color="primary" position="static">
								<Toolbar>
									<TypoGraphy variant="title" color="inherit">
										Google Books API
									</TypoGraphy>
									<NavBar />
								</Toolbar>
							</AppBar>
						</div>
					</div>
					<div>
						<Button variant="contained" color="primary">
							Search for books
						</Button>
					</div>
					<div className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<h2>Welcome to React</h2>
					</div>
					<p className="App-intro">
						To get started, edit <code>src/App.js</code> and save to reload.
					</p>
          <div>
            
          </div>
				</div>
			</div>
		);
	}
}

export default App;
