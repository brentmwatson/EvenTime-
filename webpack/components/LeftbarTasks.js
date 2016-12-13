import React from 'react'
import { Link } from 'react-router'
import moment from 'moment'
import LeftbarDays from './LeftbarDays'
import ChecklistItem from './ChecklistItem'
var DatePicker = require('react-datepicker');

class Leftbar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      milestones: []
    }
  }
componentWillMount(){
  let user = JSON.parse(sessionStorage.getItem('user'))

  fetch('/api/events/' + user.events[0].id + '?user_token=' +  sessionStorage.getItem('auth_token') + '&user_email=' + sessionStorage.getItem('email'),
      {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      }
      })
      .then(response => response.json())
      //.then(response => console.log(response))
      .then(response => this.setState({milestones: response.event.milestones}))
}
  render(){
    var checklistItemList = this.state.milestones.filter((milestone, i) =>{
            return <ChecklistItem/>})
    var totalItems = checklistItemList.length

    var checklistComplete = this.state.milestones.filter((milestone, i) =>{
            return <ChecklistItem complete={milestone} key={i}/>})

   var completedItems = checklistComplete.length
    return (
      <div>
                <h5 className="text-center"> {completedItems} out of {totalItems} tasks done</h5>

      </div>
    )
  }
}

export default Leftbar
