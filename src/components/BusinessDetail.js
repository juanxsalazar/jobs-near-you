import React, { Component } from 'react';
import axios from 'axios'

class BusinessDetail extends Component {
   state = {
    jobs: []
   }

componentDidMount() {
   axios
   .get(`http://localhost:3000/businesses/${this.props.business.id}/jobs`)
   .then(response => {
       this.setState({ jobs: response.data})
   })
}

// renderJobs = () => {
//     if (this.state.business.jobs.length === 0) {
//       return <></>
//     }

    render() {
        return (
            <div> 
                <li>
                {this.props.business.name}, {this.props.business.address}.
                </li>
                <ul>
                {
                        this.state.jobs.map(job => <li>
                       Job: {job.title}    
                        </li>)
                    }
                    </ul>
            </div>
        );
    }
}

export default BusinessDetail;