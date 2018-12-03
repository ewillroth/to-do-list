import React, { Component } from 'react';

class Form extends Component {
	render() {
		return (
			<>
				<input
					type="text"
					placeholder="Add Todo"
					onChange={this.props.change}
					value={this.props.value}
				/>
				<button onClick={this.props.click}>Add</button>
			</>
		);
	}
}

export default Form;
