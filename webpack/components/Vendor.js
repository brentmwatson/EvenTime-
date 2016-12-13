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
    }
    // componentWillMount(){
    //     let user = JSON.parse(sessionStorage.getItem('user'))
    //
    //     fetch('/api/vendors/' + user.events[0].id + '?user_token=' +  sessionStorage.getItem('auth_token') + '&user_email=' + sessionStorage.getItem('email'),
    //         {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //         })
    //         .then(response => response.json())
    //         .then(response => console.log(response))
    //         //.then(response => this.setState({milestones: response.event.milestones}))
    // }


    render(){
        // var vendoradding = this.state.vendors.map((vendors, i) =>{
        //     return <vendorAdd vendor={vendors} key={i}/>})

        var hasvendor = undefined
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
                        {hasvendor?<VendorSingle />:''}

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
