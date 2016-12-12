import React from 'react'
import { Link } from 'react-router'
import moment from 'moment'
import LeftbarDays from './LeftbarDays'
var DatePicker = require('react-datepicker');

class Leftbar extends React.Component {
  constructor(props){
    super(props)
  }
// componentWillMount(){
//   let user = JSON.parse(sessionStorage.getItem('user'))
//
//   fetch('/api/events/' + user.events[0].id + '?user_token=' +  sessionStorage.getItem('auth_token') + '&user_email=' + sessionStorage.getItem('email'),
//       {
//       method: 'GET',
//       headers: {
//           'Content-Type': 'application/json'
//       }
//       })
//       .then(response => response.json())
//       // .then(response => console.log(response))
//       .then(response => this.setState({milestones: response.event.milestones}))
// }
  render(){
    // var checklistItemList = this.state.milestones.filter((milestone, i) =>{
    //         return <ChecklistItem completed/>})
            //.length
    return (
      <div>
                <h5>3 out of 100 tasks done</h5>
                {/* <h5>{checklistItemList.length}</h5> */}
      </div>
    )
  }
}

export default Leftbar
