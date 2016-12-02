import React from 'react'
import { Link } from 'react-router'
var DatePicker = require('react-datepicker');
import moment from 'moment'
import Nav from './Nav'
import Footer from './Footer'
import Leftbar from './Leftbar'

class Addtheme extends React.Component {
    constructor(props){
        super(props)
        this.state = {
      startDate: moment()
        }
    }
    handleChange(date) {
    this.setState({
      startDate: date
    });
    }

    render(){
        return (<div>
            <Nav />
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <Leftbar />
                        </div>
                        <div className="col-sm-9">
                            <div className="panel panel-default">
                                <div className="panel-body">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <h1>Let's create a theme!</h1>
                                            <hr />
                                            <h4>How to use the feature blurb......</h4>
                                            <label htmlFor="theme">Pick a theme</label>
                                            <select className="form-control" name="theme" id="theme">
                                              <option>Reception</option>
                                            </select>
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <h4>When is the date of the event?</h4>
                                                    <DatePicker
                                                            selected={this.state.startDate}
                                                            onChange={this.handleChange.bind(this)}
                                                          />
                                                </div>
                                            </div>
                                            <h4>Let's get started</h4>
                                            <h4><div className="form-group"><Link to="/event/questions"> <button className="btn btn-default">+ create your event</button></Link>
                                        </div></h4>
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

export default Addtheme
