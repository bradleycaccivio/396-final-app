import React from 'react';

class MakeClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            capacity: 30,
            day: new Date().toLocaleDateString(),
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
        console.log(this.state);
    }

    handleSubmit(event) {
        fetch(`http://localhost:8081/sessions`, {
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
                //this.props.rHandle()
                console.log(data);
            })
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Time:
                    <input type="datetime-local" name="day" defaultValue={this.state.day} onChange={this.handleValueChange} />
                </label>
                <label>
                    Capacity:
                    <input type="number" name="capacity" defaultValue={this.state.capacity} onChange={this.handleValueChange} />
                </label>
                <input type="submit" value="Submit" />
                <button onClick={this.props.cre}>Cancel</button>
            </form>
        )
    }
}

export default MakeClass;
