import React from 'react'
import { Link } from 'react-router'
import ChecklistItem from './ChecklistItem'
import ChecklistAdd from './ChecklistAdd'
import moment from 'moment'
var DatePicker = require('react-datepicker');

class Checklist extends React.Component {
    constructor(props){
        super(props)
        // this.state = {
        //     milestones: [
        //         {
        //             title: '',
        //             id: '',
        //             notes: '',
        //             date: '',
        //         }
        //     ]
        // }
    }
    componentWillMount(){
        // var event_id = sessionStorage.getItem('event_id')
        // fetch('/api/milestones' + 'user_token=' +  sessionStorage.getItem('auth_token') + '&user_email=' + sessionStorage.getItem('email'),
        //     {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        //     })
        //     .then(response => response.json())
        //     .then(response => this.setState({milestones: response.milestone}))
    }
    render(){
        // var checklistItemList = this.state.milestones.map((ChecklistItem, i) =>{
        //     return <ChecklistItem key={i}/>})

        return (<div>
            <h1>Master CheckList</h1>
            <hr />
            {/* {checklistItemList} */}
            {/* <ChecklistItem /> */}
            <ChecklistAdd />
        </div>
    )
}
}

export default Checklist
