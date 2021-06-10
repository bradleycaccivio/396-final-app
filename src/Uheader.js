import './Uheader.css';
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
                <p className="uttl">Yoga Time</p>
                <div className="buttons">
                    <p className="headaside">Welcome {this.props.user.name}</p>
                    <div className="spacer"></div>
                    <button onClick={this.handleSignout} className="headaside">Sign Out</button>
                </div>
            </div>
        );
    }
}

export default Uheader;
