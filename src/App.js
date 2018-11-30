import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Body from './components/Body';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Title />
				<Body />
			</div>
		);
	}
}

export default App;
