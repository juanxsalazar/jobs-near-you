import React, { Component } from 'react';
import axios from 'axios'
import BusinessListItem from './BusinessListItem'

class BusinessList extends Component {
state = {
    businesses: []
}

componentDidMount() {
    axios.get('http://localhost:3000/businesses/').then(response => {
        this.setState({businesses: response.data })
    })
}

    render() {
        return (
            <div>
              <ul>
                  {
                      this.state.businesses.map(business => 
                    <BusinessListItem key={business.id} business={business} />
                      )}
            </ul>  
            </div>
        );
    }
}

export default BusinessList;