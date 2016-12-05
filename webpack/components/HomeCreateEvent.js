import React from 'react'
import { Link } from 'react-router'
import Nav from './Nav'
import Footer from './Footer'
import Leftbar from './Leftbar'
import HomeFeatureBlurb from './HomeFeatureBlurb'

class Home extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (<div>
            <h4>Let's get started</h4>
            <h4><div className="form-group"><Link to="/event/addevent"> <button className="btn btn-default">+ create your event</button></Link>
        </div></h4>
    </div>
)
}
}

export default Home
