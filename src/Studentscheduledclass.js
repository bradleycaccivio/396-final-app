import React from 'react';

class Studentscheduledclass extends React.Component {
    constructor(props) {
        super(props);
        this.cancelHandle = this.cancelHandle.bind(this);
    }

    cancelHandle() {
        const sess = this.props.ses.students;
        sess.splice(sess.indexOf(this.props.stud._id), 1);
        const newF = sess.length < this.props.ses.capacity ? false : true;
        fetch(`http://final-api-396.herokuapp.com/sessions/${this.props.ses._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                students: sess,
                full: newF
            })
        })
            .then(response => response.json())
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
                    <button onClick={this.cancelHandle}>Cancel</button>
                </div>
            </li>
        )
    }
}

export default Studentscheduledclass;
