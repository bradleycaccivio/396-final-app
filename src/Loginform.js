import './Loginform.css';
import React from 'react';

class Loginform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            uType: "",
            uName: "",
            pswrd: ""
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
            fetch(`http://final-api-396.herokuapp.com/students/${this.state.uName}&${this.state.pswrd}`)
                .then(response => response.json())
                .then(data => {
                    this.props.handler(data);
                })
                .catch(err => {
                    alert("Username or Password is incorrect")
                })
        } else if (this.state.uType === "Instructor") {
            fetch(`http://final-api-396.herokuapp.com/instructors/${this.state.uName}&${this.state.pswrd}`)
                .then(response => response.json())
                .then(data => {
                    console.log("hello");
                    console.log(data);
                    this.props.handler(data);
                })
                .catch(err => {
                    console.log(err);
                    alert("Username or Password is incorrect")
                })
        } else {
            alert("error");
        }
        event.preventDefault();
    }

    handleCancel() {
        this.props.log();
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
                <input type="text" name="uName" defaultValue={this.state.uName} onChange={this.handleValueChange} className="input100" placeholder="Username"/>
                <br></br>
                <br></br>
                <input type="password" name="pswrd" defaultValue={this.state.pswrd} onChange={this.handleValueChange} className="input100" placeholder="Password"/>
                <br></br>
                <br></br>
                <input type="submit" value="Submit" className="butt"/>
                <button onClick={this.handleCancel} className="butt">Cancel</button>
            </form>
        )
    }
}

export default Loginform;
