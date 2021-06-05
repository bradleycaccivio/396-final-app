import React from 'react';

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            js: ''
            }
    }

    componentDidMount() {
        this.fetchUsers();
    }

    fetchUsersWithFetchAPI = () => {
        this.setState({...this.state, isFetching: true});
        fetch('http://localhost:8081/')
            .then(response => response.json())
            .then(result => {
                console.log(result)
                this.setState({js: result.data, isFetching: false})
            })
            .catch(e => {
                console.log(e);
                this.setState({...this.state, isFetching: false});
            });
    };
    fetchUsers = this.fetchUsersWithFetchAPI

    render() {
        return (
            <div>{this.state.js}</div>
        )
    }
}

export default Test;
