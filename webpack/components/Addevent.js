import React from 'react'
import { Link } from 'react-router'
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
        }
    }

    handleChange(e) {
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
        console.log(eventData)
        fetch('api/events' + sessionStorage.getItem('authentication_token') + sessionStorage.getItem('email'), {
            body:JSON.stringify({addevent: eventData}//need to get with brent with this
            ),
            method: 'POST',
            })
                //console.log(response)
            .then(response => response.json())
            //.then(response => sessionStorage.setItem('saveEvent',response.saveEvent))// don't know response yet.
    }
    render(){

        return (<div>
            <NavNewuser />
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
                                            <h1>Let's create your event!!!</h1>
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
                                            <div className="form-group"><Link to="/event/questions"> <button className="btn btn-default" onClick={this.addevent}>Submit</button></Link>
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
