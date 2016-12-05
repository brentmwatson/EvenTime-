import React from 'react'
import { Link } from 'react-router'
import moment from 'moment'
import LeftbarDays from './LeftbarDays'
var DatePicker = require('react-datepicker');

class Leftbar extends React.Component {
  constructor(props){
    super(props)
  }
  render(){

    return (
      <div>
                <h5>3 out of 100 tasks done</h5>
      </div>
    )
  }
}

export default Leftbar
