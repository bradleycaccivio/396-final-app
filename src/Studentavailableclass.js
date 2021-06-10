import './Studentavailableclass.css';
import React from 'react';

class Studentavailableclass extends React.Component {
    constructor(props) {
        super(props);
        this.joinHandle = this.joinHandle.bind(this);
        this.parseDate = this.parseDate.bind(this);
        this.parseTime = this.parseTime.bind(this);
        this.state = {
            _ds: "",
            _ts: "",
            _is: ""
        }
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

    parseDate() {
        const _d = this.props.ses.day.split("T")[0];
        const _y = _d.split("-")[0];
        const _m = _d.split("-")[1];
        const _n = _d.split("-")[2];
        var _mn;
        switch(_m) {
            case "01":
                _mn = "January";
                break;
            case "02":
                _mn = "February";
                break;
            case "03":
                _mn = "March";
                break;
            case "04":
                _mn = "April";
                break;
            case "05":
                _mn = "May";
                break;
            case "06":
                _mn = "June";
                break;
            case "07":
                _mn = "July";
                break;
            case "08":
                _mn = "August";
                break;
            case "09":
                _mn = "September";
                break;
            case "10":
                _mn = "October";
                break;
            case "11":
                _mn = "November";
                break;
            case "12":
                _mn = "December";
                break;
            default:
                alert("shouldn't be here");
        }
        const _dts = _mn + " " + _n + ", " + _y;
        var _dt = new Date(_dts);
        var _dn;
        switch(_dt.getDay()) {
            case 0:
                _dn = "Sunday";
                break;
            case 1:
                _dn = "Monday";
                break;
            case 2:
                _dn = "Tuesday";
                break;
            case 3:
                _dn = "Wednesday";
                break;
            case 4:
                _dn = "Thursday";
                break;
            case 5:
                _dn = "Friday";
                break;
            case 6:
                _dn = "Saturday";
                break;
            default:
                alert("shouldn't be here");
        }
        const ret = _dn + " " + _mn + " " + _n;
        this.setState({
            _ds: ret
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

    parseInst = () => {
        var ret;
        fetch(`http://final-api-396.herokuapp.com/instructors/${this.props.ses.instructor}`)
            .then(response => response.json())
            .then(data => {
                ret = data.name;
                this.setState({
                    _is: ret
                })
            })
            .catch(err => {
                alert("hmm");
            })
    }

    componentDidMount() {
        this.parseInst();
        this.parseDate();
        this.parseTime();
    }

    render() {
        return(
            <li>
                <div className="sac">
                    <div className="sdth">
                        <p className="sday">{this.state._ds}</p>
                        <p className="stime">{this.state._ts}</p>
                    </div>
                    <p className="sinst">Yoga with {this.state._is}</p>
                    <div className="scf">
                        <p className="scap">{`${this.props.ses.students.length}/${this.props.ses.capacity} students enrolled`}</p>
                        <button onClick={this.joinHandle} className="stdjb">Join</button>
                    </div>
                </div>
            </li>
        )
    }
}

export default Studentavailableclass;
