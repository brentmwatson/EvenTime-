import React from 'react'
import { Link } from 'react-router'
import Nav from './Nav'
import NavNewuser from './NavNewuser'
import Footer from './Footer'
import Leftbar from './Leftbar'
import HomeLeftbar from './HomeLeftbar'
import HomeFeatureBlurb from './HomeFeatureBlurb'
import HomeCreateEvent from './HomeCreateEvent'


class Home extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        // Need to rewrite this when we know how to get the current user's event
        var currentEvent = undefined

        return (<div>
            {currentEvent?<Nav />:<NavNewuser />}
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            {currentEvent?<Leftbar />:<HomeLeftbar />}
                        </div>
                        <div className="col-sm-9">
                            <div className="panel panel-default">
                                <div className="panel-body">
                                    <div className="row">
                                        <div className="col-sm-12">
                                        <HomeFeatureBlurb />
                                        <HomeCreateEvent />
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

export default Home
