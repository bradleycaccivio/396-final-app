import React from 'react';

class Instructorscheduledclass extends React.Component {
    constructor(props) {
        super(props);
        this.cancelHandle = this.cancelHandle.bind(this);
    }

    cancelHandle() {
        fetch(`http://final-api-396.herokuapp.com/sessions/${this.props.ses._id}`, {
            method: 'DELETE'
        })
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                } else {
                    return response.text();
                }
            })
            .then(data => {
                this.props.rhandle();
            })
    }

    render() {
        return(
            <li>
                <div>
                    {this.props.ses.day}
                    {this.props.ses.instructor}
                    {`${this.props.ses.students.length}/${this.props.ses.capacity} students enrolled`}
                    <button onClick={this.cancelHandle}>Cancel</button>
                </div>
            </li>
        )
    }
}

export default Instructorscheduledclass;
