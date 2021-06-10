import './Instructorpage.css';
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
        this.createHandle = this.createHandle.bind(this);
        this.reup = this.reup.bind(this);
    }

    createHandle() {
        this.setState({
            creating: !this.state.creating
        });
        this.reup();
    }

    componentDidMount() {
        fetch(`http://final-api-396.herokuapp.com/instructors/${this.props.instructor._id}/sessions`)
            .then(response => response.json())
            .then(data => {
                const _li = data.map((_s) => 
                    <Instructorscheduledclass key={_s._id} ses={_s} rhandle={this.reup} />
                );
                this.setState({
                    open: _li
                });
            })
    }

    reup() {
        fetch(`http://final-api-396.herokuapp.com/instructors/${this.props.instructor._id}/sessions`)
            .then(response => response.json())
            .then(data => {
                const _li = data.map((_s) => 
                    <Instructorscheduledclass key={_s._id} ses={_s} rhandle={this.reup} />
                );
                this.setState({
                    open: _li
                });
            })
    }

    render() {
        if (this.state.creating) {
            return(
                <div className="pwrap">
                    <div className="wrap1">
                        Your Classes
                        <div className="myline">
                        </div>
                        <ul className="icl">
                            {this.state.open}
                        </ul>
                    </div>
                    <div className="wrap2">
                        <MakeClass cre={this.createHandle} rHandle={this.reup} inst={this.props.instructor} handler={this.props.handler}/>
                    </div>
                </div>
            )
        } else {
            return(
                <div className="pwrap">
                    <div className="wrap1">
                        Your Classes
                        <div className="myline">
                        </div>
                        <ul className="icl">
                            {this.state.open}
                        </ul>
                    </div>
                    <div className="wrap3">
                        <button onClick={this.createHandle} className="butt1">Schedule a Class</button>
                    </div>
                </div>
            )
        }
    }
}

export default Instructorpage;
