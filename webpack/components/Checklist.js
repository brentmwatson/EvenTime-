import React from 'react'
import { Link } from 'react-router'
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
            <div className="col-sm-12">
                <h1>Master CheckList</h1>
                <hr />
                <ChecklistItem />
                <ChecklistAdd />
            </div>
        </div>


    )
}
}

export default Checklist
