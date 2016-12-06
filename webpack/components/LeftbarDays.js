import React from 'react'
import { Link } from 'react-router'
import moment from 'moment'
var DatePicker = require('react-datepicker');

class LeftbarDays extends React.Component {
  constructor(props){
    super(props)
  }
  
  render(){
    var date = moment().format('LL')
    return (<div>
        <h5>180 days left</h5>
    </div>
    )
  }
}

export default LeftbarDays
