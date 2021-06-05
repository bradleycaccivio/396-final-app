import React from 'react';

class Uheader extends React.Component {
    constructor(props) {
        super(props);
        this.handleSignout = this.handleSignout.bind(this);
    }

    handleSignout() {
        this.props.handler(null);
    }

    render() {
        return(
            <div>
                <p>Yoga Time</p>
                <p>Welcome {this.props.user.name}</p>
                <button onClick={this.handleSignout}>Sign Out</button>
            </div>
        );
    }
}

export default Uheader;
