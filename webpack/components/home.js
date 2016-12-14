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
        this.updateMilestones = this.updateMilestones.bind(this)
        this.state = {updateMilestones: ''}
    }

    updateMilestones() {
        this.setState({updateMilestones: Date.now()})
    }

    componentWillMount() {
        window.auth_token = sessionStorage.getItem('auth_token')
        window.email = sessionStorage.getItem('email')
        window.user = JSON.parse(sessionStorage.getItem('user'))
    }

    render(){
        var hasEvent = (typeof user.events[0] != 'undefined')

        console.log(email)

        return (<div className="backgroundImagePic">
            <Nav />
            <main>
                <div className="container-fluid backgroundImagePic">
                    <div className="row">
                        <div className="col-sm-3">
                            {hasEvent?<Leftbar {...this.props} />:<HomeLeftbar />}
                        </div>
                        <div className="col-sm-9">
                            <div className="panel panel-default">
                                <div className="panel-body">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            {hasEvent?<Checklist updateMilestones={this.updateMilestones} />:<HomeGetstarted/>}
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
