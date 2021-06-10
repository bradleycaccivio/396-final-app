import './Gheader.css';
import React from 'react';
import Loginform from './Loginform';
import Signupform from './Signupform';

class Gheader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggingIn: false,
            isSigningUp: false
            }
        this.loginHandle = this.loginHandle.bind(this);
        this.signupHandle = this.signupHandle.bind(this);
        this.cancelHandle = this.cancelHandle.bind(this);
    }

    loginHandle() {
        this.setState({
            isLoggingIn: true,
            isSigningUp: false
        });
    }

    signupHandle() {
        this.setState({
            isLoggingIn: false,
            isSigningUp: true
        });
    }

    cancelHandle() {
        this.setState({
            isLoggingIn: false,
            isSigningUp: false
        });
    }

    componentWillUnmount() {
        this.setState({
            isLoggingIn: false,
            isSigningUp: false
        });
    }

    render() {
        if (this.state.isLoggingIn) {
            return(
                <div>
                    <div>
                        <p className="gttl">Yoga Time</p>
                        <div className="buttons">
                            <button onClick={this.loginHandle} className="headaside">Sign In</button>
                            <div className="spacer"></div>
                            <button onClick={this.signupHandle} className="headaside">Sign Up</button>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <Loginform handler={this.props.handler} log={this.cancelHandle} />
                </div>
            );
        } else if (this.state.isSigningUp) {
            return(
                <div>
                    <div>
                        <p className="gttl">Yoga Time</p>
                        <div className="buttons">
                            <button onClick={this.loginHandle} className="headaside">Sign In</button>
                            <div className="spacer"></div>
                            <button onClick={this.signupHandle} className="headaside">Sign Up</button>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <Signupform handler={this.props.handler} sig={this.cancelHandle} />
                </div>
            );
        } else {
            return(
                <div>
                    <p className="gttl">Yoga Time</p>
                    <div className="buttons">
                        <button onClick={this.loginHandle} className="headaside">Sign In</button>
                        <div className="spacer"></div>
                        <button onClick={this.signupHandle} className="headaside">Sign Up</button>
                    </div>
                </div>
            );
        }
    }
}

export default Gheader;
