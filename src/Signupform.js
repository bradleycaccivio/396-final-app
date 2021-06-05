import React from 'react';

class Signupform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            uType: "",
            name: "",
            uName: "",
            pswrd: "",
            cnf: ""
        };
        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleValueChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        if (this.state.uType === "Student") {
            fetch("http://localhost:8081/students", {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: this.state.name,
                    usrname: this.state.uName,
                    pswrd: this.state.pswrd,
                    type: this.state.uType
                })
            })
                .then(response => response.json())
                .then(data => {
                    this.props.handler(data);
                })
                .catch(err => {
                    alert("shouldnt be here")
                })
        } else if (this.state.uType === "Instructor") {
            fetch("http://localhost:8081/instructors", {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: this.state.name,
                    usrname: this.state.uName,
                    pswrd: this.state.pswrd,
                    type: this.state.uType
                })
            })
                .then(response => response.json())
                .then(data => {
                    this.props.handler(data);
                })
                .catch(err => {
                    alert("shouldnt be here")
                })
        } else {
            alert("error");
        }
        event.preventDefault();
    }

    handleCancel() {
        this.props.sig();
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    I am a(n):
                    <select name="uType" defaultValue={this.state.uType} onChange={this.handleValueChange}>
                        <option value=""></option>
                        <option value="Student">Student</option>
                        <option value="Instructor">Instructor</option>
                    </select>
                </label>
                <label>
                    Name:
                    <input type="text" name="name" defaultValue={this.state.name} onChange={this.handleValueChange} />
                </label>
                <label>
                    Username:
                    <input type="text" name="uName" defaultValue={this.state.uName} onChange={this.handleValueChange} />
                </label>
                <label>
                    Password:
                    <input type="password" name="pswrd" defaultValue={this.state.pswrd} onChange={this.handleValueChange} />
                </label>
                <label>
                    Confirm:
                    <input type="password" name="cnf" defaultValue={this.state.cnf} onChange={this.handleValueChange} />
                </label>
                <input type="submit" value="Submit" />
                <button onClick={this.handleCancel}>Cancel</button>
            </form>
        )
    }
}

export default Signupform;
