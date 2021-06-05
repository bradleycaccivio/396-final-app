import React from 'react';
import Instructorscheduledclass from './Instructorscheduledclass';
import MakeClass from './MakeClass';

class Instructorpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: [],
            creating: false
        };
        this.pReload = this.pReload.bind(this);
        this.createHandle = this.createHandle.bind(this);
    }

    pReload() {
        this.setState({
            open: [],
            creating: false
        });
        console.log(this.state);
    }

    createHandle() {
        this.setState({
            creating: !this.state.creating
        });
    }

    componentDidMount() {
        fetch(`http://localhost:8081/instructors/${this.props.instructor._id}/sessions`)
            .then(response => response.json())
            .then(data => {
                const _li = data.map((_s) => 
                    <Instructorscheduledclass key={_s._id} ses={_s} rhandle={this.pReload} />
                );
                this.setState({
                    open: _li
                });
            })
    }

    render() {
        if (this.state.creating) {
            return(
                <div>
                    Your Classes
                    <ul>
                        {this.state.open}
                    </ul>
                    <MakeClass cre={this.createHandle} rHandle={this.pReload} inst={this.props.instructor} />
                </div>
            )
        } else {
            return(
                <div>
                    Your Classes
                    <ul>
                        {this.state.open}
                    </ul>
                    <button onClick={this.createHandle}>Schedule a Class</button>
                </div>
            )
        }
    }
}

export default Instructorpage;
