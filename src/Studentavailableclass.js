import React from 'react';

class Studentavailableclass extends React.Component {
    constructor(props) {
        super(props);
        this.joinHandle = this.joinHandle.bind(this);
    }

    joinHandle() {
        const sess = this.props.ses.students;
        sess.push(this.props.stud);
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
                    {`${this.props.ses.students.length}/${this.props.ses.capacity} students enrolled`}
                    <button onClick={this.joinHandle}>Join</button>
                </div>
            </li>
        )
    }
}

export default Studentavailableclass;
