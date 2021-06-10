import './MakeClass.css';
import React from 'react';

class MakeClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            capacity: "",
            day: new Date().toString(),
            full: false
        };
        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleValueChange(event) {
        const target = event.target;
        const name = target.name;
        const value = name === "capacity" ? parseInt(target.value) : Date.parse(target.value);
        
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        fetch(`https://final-api-396.herokuapp.com/sessions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                instructor: this.props.inst._id,
                students: [],
                capacity: this.state.capacity,
                day: this.state.day,
                full: this.state.full
            })
        })
            .then(response => response.json())
            .then(data => {
                this.props.cre();
            })
        event.preventDefault();
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit} className="mclass">
                <input type="datetime-local" name="day" defaultValue={this.state.day} onChange={this.handleValueChange} className="de"/>
                <br></br>
                <br></br>
                <input type="number" name="capacity" defaultValue={this.state.capacity} onChange={this.handleValueChange} className="input200" placeholder="Capacity" min="0"/>
                <br></br>
                <br></br>
                <input type="submit" value="Submit" className="makebutt"/>
                <button onClick={this.props.cre} className="makebutt">Cancel</button>
            </form>
        )
    }
}

export default MakeClass;
