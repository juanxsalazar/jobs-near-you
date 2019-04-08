import React, { Component } from 'react';

class BusinessListItem extends Component {
    render() {
        return (
            <div>
                <li>
                {this.props.business.name}, {this.props.business.address}    
                </li>
            </div>
        );
    }
}

export default BusinessListItem;