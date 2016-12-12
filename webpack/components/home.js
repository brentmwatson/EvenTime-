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

    componentWillMount() {
        window.auth_token = sessionStorage.getItem('auth_token')
        window.email = sessionStorage.getItem('email')
        window.user = JSON.parse(sessionStorage.getItem('user'))
    }

    render(){
        // Need to rewrite this when we know how to get the current user's event
        var hasEvent = (typeof user.events[0] != 'undefined')
        //window.id = sessionStorage.getItem('id')
        //console.log(auth_token)
        console.log(email)
        //console.log(user)
        //console.log(id)

        return (<div>
            <Nav />
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            {hasEvent?<Leftbar />:<HomeLeftbar />}
                        </div>
                        <div className="col-sm-9">
                            <div className="panel panel-default">
                                <div className="panel-body">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            {hasEvent?<Checklist />:<HomeGetstarted/>}
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
