import React from 'react'
import { Link } from 'react-router'
import ChecklistItem from './ChecklistItem'
import ChecklistAdd from './ChecklistAdd'
import moment from 'moment'
var DatePicker = require('react-datepicker');

class Checklist extends React.Component {
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
            // .then(response => console.log(response))
            .then(response => this.setState({milestones: response.event.milestones}))
    }
    //
    render(){
        var checklistItemList = this.state.milestones.map((milestone, i) =>{
            return <ChecklistItem milestone={milestone} key={i}/>})
        return (<div>
            <h1 className="masterName">Master CheckList</h1>
            <hr />
            {checklistItemList}
            <ChecklistAdd />
        </div>
    )
}
}

export default Checklist
