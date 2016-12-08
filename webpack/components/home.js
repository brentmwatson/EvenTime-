import React from 'react'
import { Link } from 'react-router'
import Nav from './Nav'
import NavNewuser from './NavNewuser'
import Footer from './Footer'
import Leftbar from './Leftbar'
import HomeLeftbar from './HomeLeftbar'
import HomeGetstarted from './HomeGetstarted'
import Checklist from './Checklist'


class Home extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        // Need to rewrite this when we know how to get the current user's event
        var currentEvent = undefined

        window.auth_token = sessionStorage.getItem('auth_token')
        window.email = sessionStorage.getItem('email')
        console.log(auth_token)
        console.log(email)

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
                                            {currentEvent?<Checklist />:<HomeGetstarted/>}
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
