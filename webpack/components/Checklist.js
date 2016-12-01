import React from 'react'
import { Link } from 'react-router'
import Nav from './Nav'
import Footer from './Footer'
import Leftbar from './Leftbar'

class Checklist extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            cakeOrdered: false
        }
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
                            <div className="panel panel-default">
                              <div className="panel-heading"  >
                                <div className="panel-title">
                                  <div className="row">
                                    <div className="col-sm-1">
                                      <div className="checkbox">
                                        <label><input type="checkbox" value="" onChange={(e) => this.setState({cakeOrdered:e.target.checked})} /></label>
                                      </div>
                                    </div>
                                    <div className="col-sm-11">
                                      <h4>Order Cake</h4>
                                    </div>
                                  </div>
                                </div>
                            </div>
                              <div className={this.state.cakeOrdered?"panel-body":"panel-body panel-body-collapse"}>
                                <div className="row">
                                  <div className="col-sm-9">
                                    <div className="form-group">
                                      <label htmlFor="notes">Notes:</label>
                                      <textarea className="form-control" rows="3" id="notes"></textarea>
                                    </div>
                                  </div>
                                  <div className="col-sm-3">
                                    <div className="form-group">
                                      <label htmlFor="businessName"> Business Name</label>
                                      <input type="text" className="form-control" id="businessName" placeholder="Enter Name" />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-sm-12">
                                    <div className="col-sm-1 pull-right">
                                      <i className="fa fa-pencil fa-2x" aria-hidden="true"></i>
                                    </div>
                                    <div className="col-sm-1 pull-right">
                                      <i className="fa fa-trash fa-2x" aria-hidden="true"></i>
                                    </div>
                                  </div>

                              </div>
                            </div>
                          </div>
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
