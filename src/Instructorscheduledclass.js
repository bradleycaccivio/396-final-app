import React from 'react';

class Instructorscheduledclass extends React.Component {
    constructor(props) {
        super(props);
        this.cancelHandle = this.cancelHandle.bind(this);
    }

    cancelHandle() {
        const sess = this.props.ses;
        fetch(`http://localhost:8081/sessions/${sess._id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => {
                this.props.pReload();
            })
    }

    render() {
        return(
            <li>
                <div>
                    {this.props.value.day}
                    {this.props.value.instructor}
                    {`${this.props.ses.length}/${this.props.ses.capacity} students enrolled`}
                    <button onClick={this.cancelHandle}>Cancel</button>
                </div>
            </li>
        )
    }
}

export default Instructorscheduledclass;
