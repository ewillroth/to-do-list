import React, { Component } from 'react';
import './App.css';
import Title from './components/Title/Title';
import Body from './components/Body/Body';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Title title='To-do List'/>
				<Body />
			</div>
		);
	}
}

export default App;

