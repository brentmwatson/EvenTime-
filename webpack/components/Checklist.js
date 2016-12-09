import React from 'react'
import { Link } from 'react-router'
import ChecklistItem from './ChecklistItem'
// import ChecklistAdd from './ChecklistAdd'
import moment from 'moment'
var DatePicker = require('react-datepicker');

class Checklist extends React.Component {
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         milestones: [
    //             {
    //                 title: '',
    //                 id: '',
    //                 notes: '',
    //                 completed: '',
    //                 date: '',
    //             }
    //         ]
    //     }
    // }
    // componentWillMount(){
    //     setState({milestones: response.})
    // }
    render(){
        // var checklistItemList = this.state.milestones.map((ChecklistItem, i) =>{
        //     return <ChecklistItem key={i}/>})

        return (<div>
            <h1>Master CheckList</h1>
            <hr />
            {/* {checklistItemList} */}
            <ChecklistItem />
        </div>
    )
}
}

export default Checklist
