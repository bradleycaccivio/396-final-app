import React from 'react';

class Studentscheduledclass extends React.Component {
    constructor(props) {
        super(props);
        this.cancelHandle = this.cancelHandle.bind(this);
    }

    cancelHandle() {
        const sess = this.props.ses;
        const newS = sess.students.splice(sess.students.indexOF(this.props.stud._id), 1);
        const newF = newS.length < sess.capacity ? true : false;
        fetch(`http://localhost:8081/sessions/${sess._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                students: newS,
                full: newF
            })
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
                    <button onClick={this.cancelHandle}>Cancel</button>
                </div>
            </li>
        )
    }
}

export default Studentscheduledclass;
