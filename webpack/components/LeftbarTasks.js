import React from 'react'
import { Link } from 'react-router'
import moment from 'moment'
import LeftbarDays from './LeftbarDays'
import ChecklistItem from './ChecklistItem'
var DatePicker = require('react-datepicker');

class LeftbarTasks extends React.Component {
  constructor(props){
    super(props)
    this.fetchMilestones = this.fetchMilestones.bind(this)
    this.state = {
      milestones: []
    }
  }
componentWillMount(){
  this.fetchMilestones()
}
componentWillReceiveProps() {
  this.fetchMilestones()
}
fetchMilestones() {
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
    var totalItems = this.state.milestones.length
    var completedItems = this.state.milestones.filter((milestone, i) => {
      return milestone.complete
    })

    return (
      <div>
        <h5 className="text-center">{completedItems.length} out of {totalItems} tasks done</h5>
      </div>
    )
  }
}

export default LeftbarTasks
