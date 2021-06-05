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
    }

    loginHandle() {
        this.setState({
            isLoggingIn: !this.state.isLoggingIn,
            isSigningUp: false
        });
    }

    signupHandle() {
        this.setState({
            isLoggingIn: false,
            isSigningUp: !this.state.isSigningUp
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
                        <p>Yoga Time</p>
                        <button onClick={this.loginHandle}>Sign In</button>
                        <button onClick={this.signupHandle}>Sign Up</button>
                    </div>
                    <Loginform handler={this.props.handler} log={this.loginHandle} />
                </div>
            );
        } else if (this.state.isSigningUp) {
            return(
                <div>
                    <div>
                        <p>Yoga Time</p>
                        <button onClick={this.loginHandle}>Sign In</button>
                        <button onClick={this.signupHandle}>Sign Up</button>
                    </div>
                    <Signupform handler = {this.props.handler} sig={this.signupHandle} />
                </div>
            );
        } else {
            return(
                <div>
                    <p>Yoga Time</p>
                    <button onClick={this.loginHandle}>Sign In</button>
                    <button onClick={this.signupHandle}>Sign Up</button>
                </div>
            );
        }
    }
}

export default Gheader;
