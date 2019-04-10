import React, { Component } from 'react';
import axios from 'axios';

class ListJobs extends Component {
    state = {
        jobs: []
    }

    componentDidMount () {
        axios.get('http://localhost:3000/businesses/26/jobs').then(response => {
          this.setState({ jobs: response.data })  
        })
    }

    render() {
        return (
            <div>
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

export default ListJobs;