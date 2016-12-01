import React from 'react'
import { Link } from 'react-router'
import Nav from './Nav'
import Footer from './Footer'
import Leftbar from './Leftbar'

class Questions extends React.Component {
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
                          <div className="col-sm-12">
                            <h1>Questions</h1>
                            <hr />
                            <h4>How to use the feature blurb......</h4>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <h4>Let's get started</h4>
                            <h4><div className="form-group"> <button className="btn btn-default">Let's plan</button>
                            </div></h4>
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

export default Questions
