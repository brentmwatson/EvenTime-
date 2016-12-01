import React from 'react'
import { Link } from 'react-router'
import Nav from './Nav'
import Footer from './Footer'
import Leftbar from './Leftbar'

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
                        <div className="row">
                          <div className="col-sm-12 text-center">
                            <h1>Vendor List</h1>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-6 text-right">
                            <h3>Spring Hall</h3>
                          </div>
                          <div className="col-sm-6 text-left">
                            <h3>Venue</h3>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-6 text-right">
                            <h5>678-313-7098</h5>
                          </div>
                          <div className="col-sm-2 text-left">
                            <h5>Atlanta </h5>
                          </div>
                          <div className="col-sm-1 text-left">
                            <h5>GA </h5>
                          </div>

                        </div>
                        <div className="row">
                          <div className="col-sm-12 text-center">
                            <h5>springhallgf@gmail.com</h5>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-6 text-right">
                            <h5>Contact: </h5>
                          </div>
                          <div className="col-sm-3 text-left">
                            <h5>Jack Barber</h5>
                          </div>
                          <div className="col-sm-3">
                            <div className="form-group"> <button className="btn btn-default pull-right">delete</button>
                            </div>
                          </div>

                        </div>
                        <hr />

                        <div className="row">
                          <div className="col-sm-12 text-center">
                            <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                              <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingOne">
                                  <h4 className="panel-title">
                                    <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                      Add a Business
                                    </a>
                                  </h4>
                                </div>
                                <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                  <div className="panel-body">
                                    <div className="row">
                                      <div className="col-sm-6 text-left">
                                        <div className="form-group">
                                          <label for="username">Business Name</label>
                                          <input type="text" className="form-control" id="username" placeholder="Enter Business Name" required/>
                                        </div>
                                      </div>
                                      <div className="col-sm-6 text-left">
                                        <div className="form-group">
                                          <label for="vendorCat">Category</label>
                                          <select className="form-control" name="vendorCat" id="vendorCat">
                                            <option>Venue</option>
                                            <option>Ceremony</option>
                                            <option>Caterer</option>
                                            <option>Cake</option>
                                            <option>DJ</option>
                                            <option>Band</option>
                                            <option>Decorator</option>
                                            <option>Florist</option>
                                            <option>Event Planner</option>
                                            <option>Photographer</option>
                                            <option>Videographer</option>
                                            <option>Other</option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-sm-6 text-left">
                                        <div className="form-group">
                                          <label for="username">Phone Number</label>
                                          <input type="text" className="form-control" id="username" placeholder="(xxx)-(xxx)-(xxxx)" maxLength="10" required/>
                                        </div>
                                      </div>
                                      <div className="col-sm-3 text-left">
                                        <div className="form-group">
                                          <label for="username"> City</label>
                                          <input type="text" className="form-control" id="username" placeholder="Enter city" required/>
                                        </div>
                                      </div>
                                      <div className="col-sm-3 text-left">
                                        <div className="form-group">
                                          <label for="username"> State </label>
                                          <input type="text" className="form-control" id="username" placeholder="IN" maxlength="2" required/>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-sm-12 text-left">
                                        <div className="form-group">
                                          <label for="username"> Email</label>
                                          <input type="email" className="form-control" id="username" placeholder="Enter email" />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-sm-6 text-left">
                                        <div className="form-group">
                                          <label for="username"> Contact Name</label>
                                          <input type="text" className="form-control" id="username" placeholder="Enter Contact Name" required/>
                                        </div>
                                      </div>
                                      <div className="col-sm-6">
                                        <div className="form-group"> <button className="btn btn-default pull-right">Add Business</button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
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

export default Vendor
