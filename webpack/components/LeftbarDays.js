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
    var today = moment()
    let user = JSON.parse(sessionStorage.getItem('user'))
    var eventDate = moment(user.events[0].date)
    var diff = moment(eventDate).diff(today, 'days')
    return (<div>
<h4>Your event date!!!!!</h4>
      <h5>{eventDate.format('L')}</h5>
        <h5>{diff} days away</h5>
    </div>
    )
  }
}

export default LeftbarDays
