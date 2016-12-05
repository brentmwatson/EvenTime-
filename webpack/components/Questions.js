import React from 'react'
import { Link } from 'react-router'
import Nav from './Nav'
import NavNewuser from './NavNewuser'
import Footer from './Footer'
import Leftbar from './Leftbar'
import QuestionsLeftbar from './QuestionsLeftbar'

class Questions extends React.Component {
    constructor(props){
        super(props)
    }
    render(){


        return (<div>
            <NavNewuser />
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <QuestionsLeftbar />
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
                                                <div className="col-sm-12">
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-1">
                                                    <h4>#1</h4>
                                                </div>
                                                <div className="col-sm-9">
                                                    <h4>the question</h4>
                                                </div>
                                                <div className="col-sm-1">
                                                    <div className="radio">
                                                        <label><input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" />Yes</label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-1">
                                                    <div className="radio">
                                                        <label><input type="radio" name="optionsRadios" id="optionsRadios2" value="option2"/> No</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h4><div className="form-group"><Link to="/event/checklist"> <button className="btn btn-default">Submit</button></Link>
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
