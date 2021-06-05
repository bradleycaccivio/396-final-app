import React from 'react';
import Studentscheduledclass from './Studentscheduledclass';
import Studentavailableclass from './Studentavailableclass';

class Studentpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            enrolled: [],
            available: []
        };
        this.pReload = this.pReload.bind(this);
    }

    pReload() {
        this.setState({
            enrolled: [],
            available: []
        })
    }

    componentDidMount() {
        fetch(`http://localhost:8081/students/${this.props.student._id}/sessions`)
            .then(response => response.json())
            .then(data => {
                const _li = data.map((_s) => 
                    <Studentscheduledclass key={_s._id} ses={_s} stud={this.props.student} rhandle={this.pReload} />
                );
                this.setState({
                    enrolled: _li
                });
            })
        fetch(`http://localhost:8081/students/${this.props.student._id}/availablesessions`)
            .then(response => response.json())
            .then(data => {
                const _li = data.map((_s) => 
                    <Studentavailableclass key={_s._id} ses={_s} stud={this.props.student} rhandle={this.pReload} />
                );
                this.setState({
                    available: _li
                });
            })
    }

    render() {
        return(
            <div>
                Your Classes
                <ul>
                    {this.state.enrolled}
                </ul>
                Open Classes
                <ul>
                    {this.state.available}
                </ul>
            </div>
        )
    }
}

export default Studentpage;
