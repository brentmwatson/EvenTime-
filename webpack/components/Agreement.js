import React from 'react'
import { Link } from 'react-router'
import Nav from './Nav'
import Footer from './Footer'

class Agreement extends React.Component {
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
                    <div className="panel panel-default">
                      <div className="panel-body">
                        <div className="leftAgreeFiles">
                          <div className="row">
                            <div className="col-sm-12">
                              <h1>Files</h1>
                              <hr />
                              <h4>Venue</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-9">
                    <div className="panel panel-default">
                      <div className="panel-body">
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="form-group">
                              <div className="row">
                                <div className="col-sm-6">
                                  <label htmlFor="photo">Add PDF files</label>
                                  <input type="file" id="fileUploader" value="" name="fileUploader" className="form-control"/>
                                </div>
                                <div className="col-sm-6">
                                  <label htmlFor="agreementCat">Category</label>
                                  <select className="form-control" name="agreementCat" id="agreementCat">
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
                              <button className="btn btn-default pull-right addFileBtn">Submit</button>

                            </div>
                          </div>
                            <hr />

                          <div className="row">
                            <div className="col-sm-12">
                              <h1>Benefits of uploading files</h1>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                              </p>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                              </p>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                              </p>
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

export default Agreement
