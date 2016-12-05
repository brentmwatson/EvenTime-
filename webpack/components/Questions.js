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
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <div className="row">
                                                <div className="col-sm-2">
                                                    <h4>#1</h4>
                                                </div>
                                                <div className="col-sm-8">
                                                    <h4>the question</h4>
                                                </div>
                                                <div className="col-sm-1">
                                                    <div className="checkbox">
                                                        <label>
                                                            <input type="checkbox" value=""/>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-1">
                                                    <div className="checkbox">
                                                        <label>
                                                            <input type="checkbox" value=""/>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                    <h4>Let's get started</h4>
                                    <h4><div className="form-group"><Link to="/event/checklist"> <button className="btn btn-default">+ create master checklist</button></Link>
                                </div></h4>
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
