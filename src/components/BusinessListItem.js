import React, { Component } from 'react';

class Jobs extends Component {
    render() {
        return (
            <div>
                <li>
                {this.props.business.name}    
                </li>
            </div>
        );
    }
}

export default Jobs;