import React, { Component } from 'react';

class Delete extends Component {
	render() {
		return (
			<>
				<button className={this.props.className} onClick={this.props.click}>
					Remove
				</button>
			</>
		);
	}
}

export default Delete;
