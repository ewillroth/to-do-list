import React, {Component} from 'react';

class Strikethrough extends Component {
    render(){
        return(
            <button onClick={this.props.click}>Strikeout</button>
        )
    }
}

export default Strikethrough;