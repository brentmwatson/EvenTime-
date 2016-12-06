import React from 'react'
import { Link } from 'react-router'


class VendorSingle extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (<div>
                    <div className="panel panel-default">
                      <div className="panel-body">
                        <div className="row">
                          <div className="col-sm-12 text-center">
                            <h1>Vendor List</h1>
                          </div>
                        </div>
                        <hr />

                        <div className="row">
                          <div className="col-sm-4 text-left">
                            <h3>Spring Hall</h3>
                          </div>
                          <div className="col-sm-4 text-center">
                            <h3>Venue</h3>
                          </div>
                          <div className="col-sm-4 text-center">
                            <h3>770-333-4444</h3>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-4 text-right">
                              <h5>7130 buford hwy, suite a100</h5>
                          </div>
                          <div className="col-sm-3 text-right">
                            <h5>Atlanta, GA</h5>
                          </div>
                          <div className="col-sm-3 text-left">
                            <h5>36044</h5>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-4 text-right">
                            <h5>springhallgf@gmail.com</h5>
                          </div>
                          <div className="col-sm-3 text-right">
                            <h5>first_name</h5>
                          </div>
                          <div className="col-sm-3 text-left">
                            <h5>last_name</h5>
                          </div>
                          </div>



                          <div className="row">
                          <div className="col-sm-12 pull-right">
                            <div className="form-group"> <button className="btn btn-default pull-right">delete</button>
                            </div>
                          </div>
                          </div>
                        <hr />
                      </div>
                    </div>
                    </div>
        )
    }
}

export default VendorSingle
