import React, { Component } from 'react';
import List from '../List/List';
import Form from '../Form/Form';
import Delete from '../Delete/Delete';
import Strikethrough from '../Strikethrough/Strikethrough';

class Body extends Component {
	constructor(props) {
		super(props);

		this.state = {
			inputValue: '',
			userlist: [],
			remove: false,
			strikethrough: false
		};
		this.onChange = this.onChange.bind(this);
		this.onClick = this.onClick.bind(this);
		this.onClickDelete = this.onClickDelete.bind(this);
		this.onDelete = this.onDelete.bind(this);
		this.onStrikethrough = this.onStrikethrough.bind(this);
	}

	onChange(e) {
		this.setState({
			inputValue: e.target.value
		});
	}

	//adds an item to the list when the add button is clicked
	onClick() {
		let userlist = [...this.state.userlist];
		userlist.push(this.state.inputValue);
		this.setState({
			userlist,
			inputValue: ''
		});
	}

	//function that runs when the list item is clicked. will do different things depending on state
	onClickDelete(i) {
		let userlist = this.state.userlist.slice()
		if (this.state.remove) {
			userlist.splice(i, 1);
		}
		else if (this.state.strikethrough){
			//set the class on the text to strikethrough
		}
		this.setState({
			userlist
		});
	}

	//sets the state to control whether strikethrough functionality is on/off
	onStrikethrough() {
		let strikethrough = this.state.strikethrough;
		if (strikethrough) {
			strikethrough = false;
		} else {
			strikethrough = true;
		}
		this.setState({
			strikethrough
		});
	}

	//sets the state to control whether delete functionality is on/off
	onDelete() {
		let remove = this.state.remove;
		if (remove) {
			remove = false;
		} else {
			remove = true;
		}
		this.setState({
			remove
		});
	}

	render() {
		let list = this.state.userlist.map((item,i) => <li key={i} onClick={()=>this.onClickDelete(i)}>{item}</li>)
		return (
			<div className="Body">
				<List list={list} />
				<Form
					click={this.onClick}
					change={this.onChange}
					value={this.state.inputValue}
				/>
				<Delete
					className={this.state.remove ? 'on' : 'off'}
					click={this.onDelete}
				/>
				<Strikethrough 
					click={this.onStrikethrough}/>
			</div>
		);
	}
}

export default Body;
