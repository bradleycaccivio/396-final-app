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
            //const _url = "http://localhost:8081/students/"+this.state.uName+"&"+this.state.pswrd;
            const _url = "http://localhost:8081/students/60ba7cca05eb5a628a761179";
            fetch(_url)
                .then(response => response.json())
                .then(data => {
                    this.props.handler(data);
                })
                .catch(err => {
                    alert("Username or Password is incorrect")
                })
        } else if (this.state.uType === "Instructor") {
            //const _url = "http://localhost:8081/instructors/"+this.state.uName+"&"+this.state.pswrd;
            const _url = "http://localhost:8081/students/60bab8393e86a57236a12f3c";
            fetch({_url})
                .then(response => response.json())
                .then(data => {
                    this.props.handler(data);
                })
                .catch(err => {
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
                    Username:
                    <input type="text" name="uName" defaultValue={this.state.uName} onChange={this.handleValueChange} />
                </label>
                <label>
                    Password:
                    <input type="password" name="pswrd" defaultValue={this.state.pswrd} onChange={this.handleValueChange} />
                </label>
                <input type="submit" value="Submit" />
                <button onClick={this.handleCancel}>Cancel</button>
            </form>
        )
    }
}

export default Loginform;
