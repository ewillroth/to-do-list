import React, { Component } from 'react';

class List extends Component {
	render() {
		return <ul>
			{this.props.list}
			</ul>
	}
}

export default List;
