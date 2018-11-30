import React, { Component } from 'react';
import List from './List';
import Form from './Form';
import Delete from './Delete';

class Body extends Component {
	constructor(props) {
		super(props);

		this.state = {
			inputValue: '',
			userlist: [],
			remove: false
		};
		this.onChange = this.onChange.bind(this);
		this.onClick = this.onClick.bind(this);
		this.onClickDelete = this.onClickDelete.bind(this);
		this.onDelete = this.onDelete.bind(this);
	}

	onChange(e) {
		this.setState({
			inputValue: e.target.value
		});
	}

	onClick() {
		let userlist = [...this.state.userlist];
		userlist.push(this.state.inputValue);
		this.setState({
			userlist
		});
	}

	onClickDelete(i) {
		let userlist = this.state.userlist.slice()
		if (this.state.remove) {
			userlist.splice(i, 1);
		}
		this.setState({
			userlist
		});
	}

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
			</div>
		);
	}
}

export default Body;
