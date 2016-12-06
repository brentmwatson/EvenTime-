import React from 'react'
import { Link } from 'react-router'
import Nav from './Nav'
import Footer from './Footer'
import Leftbar from './Leftbar'
import ChecklistItem from './ChecklistItem'
import ChecklistAdd from './ChecklistAdd'
import moment from 'moment'
var DatePicker = require('react-datepicker');

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
                                       <ChecklistItem />
                                        <ChecklistAdd />
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
