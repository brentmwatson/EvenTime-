import React from 'react'
import { Link } from 'react-router'
import moment from 'moment'
var DatePicker = require('react-datepicker');

class LeftbarDays extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    var today = moment()
    let user = JSON.parse(sessionStorage.getItem('user'))
    var eventDate = moment(user.events[0].date)
    var diff = moment(eventDate).diff(today, 'days')

    return (<div>
<h4 className="text-center">Your event date:</h4>
      <h2 className="text-center">{eventDate.format('l')}</h2>
      <br />
      <h5 className="text-center">Your event is </h5>
        <h1 className="text-center">{diff}</h1>
        <h5 className="text-center">day{diff===1?'':'s'} away</h5>
        <br />
    </div>
    )
  }
}

export default LeftbarDays
