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
            milestones: [
                {
                    title: '',
                    id: '',
                    notes: '',


                }
            ]
        }
    }
    componentWillMount(){
        setState(milestones)
    }
    //componentwillmount.. set state here with milestones
    //get api/milestones to get my checklist, neach checklistitem to display all
    //put api/milestones/:id to update each checklist?
    //delete api/milestones/:id to delete a checklist.
    render(){
        //map this.state.milestones.map return each checklistitem for each one.  looping
        return (<div>
            <div className="col-sm-12">
                <h1>Master CheckList</h1>
                <hr />
                <ChecklistItem />
                <ChecklistAdd />
            </div>
        </div>
    )
}
}

export default Checklist
