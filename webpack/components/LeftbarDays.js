import React from 'react'
import { Link } from 'react-router'
import moment from 'moment'
var DatePicker = require('react-datepicker');

class LeftbarDays extends React.Component {
  constructor(props){
    super(props)
  }
  // var a = moment([2007, 0, 29]);
  // var b = moment([2007, 0, 28]);
  // a.diff(b, 'days') // 1
  render(){
    var date = moment().format('L')

    return (<div>
        <h5></h5>
    </div>
    )
  }
}

export default LeftbarDays
