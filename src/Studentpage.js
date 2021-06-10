import './Studentpage.css';
import React from 'react';
import Studentscheduledclass from './Studentscheduledclass';
import Studentavailableclass from './Studentavailableclass';

class Studentpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            enrolled: [],
            available: []
        };
        this.reup = this.reup.bind(this);
    }

    componentDidMount() {
        fetch(`https://final-api-396.herokuapp.com/students/${this.props.student._id}/sessions`)
            .then(response => response.json())
            .then(data => {
                const _li = data.map((_s) => 
                    <Studentscheduledclass key={_s._id} ses={_s} stud={this.props.student} rhandle={this.reup} />
                );
                this.setState({
                    enrolled: _li
                });
            })
        fetch(`https://final-api-396.herokuapp.com/students/${this.props.student._id}/availablesessions`)
            .then(response => response.json())
            .then(data => {
                const _li = data.map((_s) => 
                    <Studentavailableclass key={_s._id} ses={_s} stud={this.props.student} rhandle={this.reup} />
                );
                this.setState({
                    available: _li
                });
            })
    }

    reup() {
        fetch(`https://final-api-396.herokuapp.com/students/${this.props.student._id}/sessions`)
            .then(response => response.json())
            .then(data => {
                const _li = data.map((_s) => 
                    <Studentscheduledclass key={_s._id} ses={_s} stud={this.props.student} rhandle={this.reup} />
                );
                this.setState({
                    enrolled: _li
                });
            })
        fetch(`https://final-api-396.herokuapp.com/students/${this.props.student._id}/availablesessions`)
            .then(response => response.json())
            .then(data => {
                const _li = data.map((_s) => 
                    <Studentavailableclass key={_s._id} ses={_s} stud={this.props.student} rhandle={this.reup} />
                );
                this.setState({
                    available: _li
                });
            })
    }

    parseTime() {
        const _t = this.props.ses.day.split("T")[1];
        const _h = _t.split(":")[0];
        const _m = _t.split(":")[1];
        var ret;
        switch(_h) {
            case "00":
                ret = "7:" + _m + " PM";
                break;
            case "01":
                ret = "8:" + _m + " PM";
                break;
            case "02":
                ret = "9:" + _m + " PM";
                break;
            case "03":
                ret = "10:" + _m + " PM";
                break;
            case "04":
                ret = "11:" + _m + " PM";
                break;
            case "05":
                ret = "12:" + _m + " AM";
                break;
            case "06":
                ret = "1:" + _m + " AM";
                break;
            case "07":
                ret = "2:" + _m + " AM";
                break;
            case "08":
                ret = "3:" + _m + " AM";
                break;
            case "09":
                ret = "4:" + _m + " AM";
                break;
            case "10":
                ret = "5:" + _m + " AM";
                break;
            case "11":
                ret = "6:" + _m + " AM";
                break;
            case "12":
                ret = "7:" + _m + " AM";
                break;
            case "13":
                ret = "8:" + _m + " AM";
                break;
            case "14":
                ret = "9:" + _m + " AM";
                break;
            case "15":
                ret = "10:" + _m + " AM";
                break;
            case "16":
                ret = "11:" + _m + " AM";
                break;
            case "17":
                ret = "12:" + _m + " PM";
                break;
            case "18":
                ret = "1:" + _m + " PM";
                break;
            case "19":
                ret = "2:" + _m + " PM";
                break;
            case "20":
                ret = "3:" + _m + " PM";
                break;
            case "21":
                ret = "4:" + _m + " PM";
                break;
            case "22":
                ret = "5:" + _m + " PM";
                break;
            case "23":
                ret = "6:" + _m + " PM";
                break;
            default:
                alert("shouldnt be here");
        }
        this.setState({
            _ts: ret
        });
    }

    render() {
        return(
            <div className="wrap12">
                <div className="wrap11">
                Your Classes
                <div className="myline2"></div>
                <ul className="scl">
                    {this.state.enrolled}
                </ul>
                </div>
                <div className="wrap11">
                Open Classes
                <div className="myline2"></div>
                <ul className="sacl">
                    {this.state.available}
                </ul>
                </div>
            </div>
        )
    }
}

export default Studentpage;
