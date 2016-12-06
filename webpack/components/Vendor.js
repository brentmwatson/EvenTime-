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
