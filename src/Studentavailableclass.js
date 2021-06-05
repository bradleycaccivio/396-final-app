import React from 'react';

class Studentavailableclass extends React.Component {
    constructor(props) {
        super(props);
        this.joinHandle = this.joinHandle.bind(this);
    }

    joinHandle() {
        const sess = this.props.ses;
        const newS = sess.students.append(this.props.stud);
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
                    {`${this.props.ses.length}/${this.props.ses.capacity} students enrolled`}
                    <button onClick={this.joinHandle}>Join</button>
                </div>
            </li>
        )
    }
}

export default Studentavailableclass;
