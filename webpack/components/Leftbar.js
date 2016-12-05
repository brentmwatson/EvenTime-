import React from 'react'
import { Link } from 'react-router'
import moment from 'moment'
import LeftbarDays from './LeftbarDays'
import LeftbarTasks from './LeftbarTasks'
var DatePicker = require('react-datepicker');

class Leftbar extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    var date = moment().format('LL')
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="leftSummary">
            <div className="row">
              <div className="col-sm-12">
                <h1>Summary</h1>
                <hr />
                <h5>{date}</h5>
                <LeftbarDays />
                <LeftbarTasks />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Leftbar
