import React from 'react'
import { Link } from 'react-router'
import ChecklistItem from './ChecklistItem'
import ChecklistAdd from './ChecklistAdd'
import moment from 'moment'
var DatePicker = require('react-datepicker');

class Checklist extends React.Component {
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         milestones: [
    //             {
    //                 name: '',
    //                 id: '',
    //                 notes: '',
    //             }
    //         ]
    //     }
    // }
    // componentWillMount(){
    //     fetch('/api/milestones' + 'user_token=' +  sessionStorage.getItem('auth_token') + '&user_email=' + sessionStorage.getItem('email'), {
    //         body:JSON.stringify({event: eventData}
    //         ),
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //         })
    //         .then(response => response.json())
    //         .then(response => this.setState({
    //         //milestones: response.
    //     }))
    // }
    //get api/milestones to get my checklist, neach checklistitem to display all
    //put api/milestones/:id to update each checklist?
    //delete api/milestones/:id to delete a checklist.
    render(){
//         var checklistItemList = this.state.milestones.map((ChecklistItem, i) =>{
//             return <ChecklistItem/>
// })
        return (<div>
            <div className="col-sm-12">
                <h1>Master CheckList</h1>
                <hr />
                {/* {checklistItemList} */}
                <ChecklistItem />
                <ChecklistAdd />
            </div>
        </div>
    )
}
}

export default Checklist
