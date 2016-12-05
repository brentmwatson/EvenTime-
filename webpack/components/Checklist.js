import React from 'react'
import { Link } from 'react-router'
import Nav from './Nav'
import Footer from './Footer'
import Leftbar from './Leftbar'
import ChecklistItem from './ChecklistItem'

class Checklist extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (<div>
            <Nav />
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
                                        <h1>Master CheckList</h1>
                                        <hr />
                                        {/* <!-- Begin ChecklistItem component... -> */}
                                       <ChecklistItem />
                                        {/* <!-- End ChecklistItem component... -> */}
                                        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                            <div className="panel panel-default">
                                                <div className="panel-heading" role="tab" id="headingOne">
                                                    <h4 className="panel-title">
                                                        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOane">
                                                            Add New Todo List
                                                        </a>
                                                    </h4>
                                                </div>
                                                <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                                    <div className="panel-body">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" id="newTodo" placeholder="Enter Todo"/>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-sm-9">
                                                                <div className="form-group">
                                                                    <label htmlFor="addNotes">Notes:</label>
                                                                    <textarea className="form-control" rows="3" id="addNotes"></textarea>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-3">
                                                                <div className="form-group">
                                                                    <label htmlFor="addBusinessName"> Business Name</label>
                                                                    <input type="text" className="form-control" id="addBusinessName" placeholder="Enter Name" />
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
            <Footer />
        </div>
    )
}
}

export default Checklist
