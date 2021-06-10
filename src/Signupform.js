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
            fetch("https://final-api-396.herokuapp.com/students", {
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
            fetch("http://final-api-396.herokuapp.com//instructors", {
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
            <form onSubmit={this.handleSubmit} className="login">
                <select name="uType" defaultValue={this.state.uType} onChange={this.handleValueChange} className="sel">
                    <option value="" selected>I am a(n)</option>
                    <option value="Student">Student</option>
                    <option value="Instructor">Instructor</option>
                </select>
                <br></br>
                <br></br>
                <input type="text" name="name" defaultValue={this.state.name} onChange={this.handleValueChange} placeholder="Name" className="input100"/>
                <br></br>
                <br></br>
                <input type="text" name="uName" defaultValue={this.state.uName} onChange={this.handleValueChange} placeholder="Username" className="input100"/>
                <br></br>
                <br></br>
                <input type="password" name="pswrd" defaultValue={this.state.pswrd} onChange={this.handleValueChange} placeholder="Password" className="input100"/>
                <br></br>
                <br></br>               
                <input type="password" name="cnf" defaultValue={this.state.cnf} onChange={this.handleValueChange} placeholder="Confirm" className="input100"/>
                <br></br>
                <br></br>
                <input type="submit" value="Submit" className="butt"/>
                <button onClick={this.handleCancel} className="butt">Cancel</button>
            </form>
        )
    }
}

export default Signupform;
