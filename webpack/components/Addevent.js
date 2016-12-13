import React from 'react'
import { Link, browserHistory } from 'react-router'
var DatePicker = require('react-datepicker');
import moment from 'moment'
import Nav from './Nav'
import NavNewuser from './NavNewuser'
import Footer from './Footer'
import Leftbar from './Leftbar'
import AddeventLeftbar from './AddeventLeftbar'

class Addevent extends React.Component {
    constructor(props){
        super(props)
        this.addevent = this.addevent.bind(this);
        this.handleChangeTheme = this.handleChangeTheme.bind(this);
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            theme: 'Wedding',
            date: moment(),
            event: []
        }
    }

    handleChange(e) {
        //console.log(e)
        this.setState({
            date: e
        });
    }
    handleChangeTheme(event) {
        this.setState({theme: event.target.value});
    }

    addevent() {
      var eventData = {
        theme: this.state.theme,
        date: this.state.date.format('L')
        }
        //console.log(eventData)
        fetch('/api/events?' + 'user_token=' +  sessionStorage.getItem('auth_token') + '&user_email=' + sessionStorage.getItem('email'), {
            body:JSON.stringify({event: eventData}
            ),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
            })
            .then(response => response.json())
            .then(response => {
                console.log(response)
                //console.log('response from back-end')
                // this.setState({event: response.event.id})
                //console.log(response.event.id)
                //console.log('suppose to be... response.event.id')
                sessionStorage.setItem('event_id', response.event.id)
                browserHistory.push('/event/questions')
            })
    }
    render(){

        return (<div className="addEventTitlet">
            <Nav />
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <AddeventLeftbar />
                        </div>
                        <div className="col-sm-9">
                            <div className="panel panel-default">
                                <div className="panel-body">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <h1 className="addEventTitle">Let's create your event!!!</h1>
                                            <hr />
                                            <label htmlFor="theme">Pick a theme</label>
                                            <select className="form-control" name="theme" id="theme"  value={this.state.theme} onChange={this.handleChangeTheme} >
                                              <option value="Wedding">Wedding</option>
                                            </select>
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <h4>When is the date of the event?</h4>
                                                    <DatePicker
                                                            selected={this.state.date}
                                                            onChange={this.handleChange} />
                                                </div>
                                            </div>
                                            <h4>Almost there!</h4>
                                            <div className="form-group"><button className="btn btn-default addeventsummitbtn" onClick={this.addevent}>Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Footer />
    </div>
)
}
}

export default Addevent
