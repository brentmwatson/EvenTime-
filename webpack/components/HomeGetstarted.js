import React from 'react'
import { Link } from 'react-router'
import Nav from './Nav'
import Footer from './Footer'
import Leftbar from './Leftbar'

class HomeGetstarted extends React.Component {
    constructor(props){
        super(props)
    }
    render(){

        return (<div className="homePageTitleT">
            <h1 className="homePageTitle">Home Page</h1>
            <hr />
            <h4>Welcome to Eventime!!!!</h4>
            <p className="homePageTitlep">
                We are excited to start this journey with you.
            </p>
            <p className="homePageTitlep">
                There is something special about planning an event.  You could be planning and event for yourself or for somebody else.  There is countless hours going into the planning, starting from picking a theme, the colors, and who to invite.  We hope this will be the starting point to plan your event to be awesome.
            </p>
            <h5>Let's get started</h5>
            <h4><div className="form-group"><Link to="/event/addevent"> <button className="btn btn-default homeBtn">+ create your event</button></Link>
            </div></h4>
    </div>

)
}
}

export default HomeGetstarted
