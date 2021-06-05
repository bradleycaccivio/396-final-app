import React from 'react';
import Gheader from './Gheader';
import Uheader from './Uheader';
import Studentpage from './Studentpage';
import Instructorpage from './Instructorpage';

class Yoga extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
            }
        this.handler = this.handler.bind(this);
    }

    handler(user) {
        this.setState({
            user: user
        });
    }

    render() {
        if (this.state.user == null) {
            return(
                <div>
                    <Gheader handler={this.handler}/>
                </div>
            );
        } else if (this.state.user.type === "Student") {
            return(
                <div>
                    <Uheader handler={this.handler} user={this.state.user}/>
                    <Studentpage student={this.state.user}/>
                </div>
            );
        } else if (this.state.user.type === "Instructor") {
            return(
                <div>
                    <Uheader handler={this.handler} user={this.state.user}/>
                    <Instructorpage instructor={this.state.user}/>
                </div>
            )
        }
    }
}

export default Yoga;
