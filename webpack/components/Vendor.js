import React from 'react'
import { Link } from 'react-router'
import Nav from './Nav'
import Footer from './Footer'
import Leftbar from './Leftbar'
import VendorSingle from './VendorSingle'
import VendorAdd from './VendorAdd'

class Vendor extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            address:[],
            contact: [],
        }
    }
    componentWillMount(){
        let user = JSON.parse(sessionStorage.getItem('user'))

        fetch('/api/vendors/' + user.events[0].id + '?user_token=' +  sessionStorage.getItem('auth_token') + '&user_email=' + sessionStorage.getItem('email'),
            {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
            })
            .then(response => response.json())
            .then(response => console.log(response))
            //.then(response => this.setState({vendor: response.event.vendor}))
    }


    render(){
        // var vendoradding = this.state.vendor.map((vendor, i) =>{
        //     return <vendorAdd vendor={vendor} key={i}/>})

        //var hasvendor = undefined

        //need to toggle if none, display none, if you added a vendor, display vendor
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
                          {/* {hasEvent? <VendorSingle /> : ''} */}
                          <VendorSingle />
                        <hr />
                        <div className="row">
                          <VendorAdd />
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

export default Vendor
