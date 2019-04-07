import React, { Component } from 'react';

class BusinessListItem extends Component {
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

export default BusinessListItem;