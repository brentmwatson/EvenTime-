import React from 'react'
import { Link } from 'react-router'
import moment from 'moment'
var DatePicker = require('react-datepicker');

//got half of summary.
//faster way to remove checkbox when deleted
class ChecklistItem extends React.Component {
    constructor(props){
        super(props)
        this.completed = this.completed.bind(this)
        this.note = this.note.bind(this)
        this.updateItem = this.updateItem.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        this.state = {
            milestone: props.milestone,
            open: false
        }
    }

    completed(e) {
        let milestone = this.state.milestone
        milestone.complete = e.target.checked
        this.setState({milestone: milestone})
        setTimeout(() => {
            this.updateItem(false)
        }, 0)
    }
    //let scopes outside curly brackets
    note(e) {
        let milestone = this.state.milestone
        milestone.note = e.target.value
        this.setState({milestone: milestone})
    }

    updateItem(reload) {
        fetch('/api/milestones/' + this.state.milestone.id + '?user_token=' +  sessionStorage.getItem('auth_token') + '&user_email=' + sessionStorage.getItem('email'),
        {
            method: 'put',
            body: JSON.stringify(this.state.milestone),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(response => {
            reload? window.location.reload() : this.props.updateMilestones()
        })
    }

    deleteItem() {
        fetch('/api/milestones/' + this.state.milestone.id + '?user_token=' +  sessionStorage.getItem('auth_token') + '&user_email=' + sessionStorage.getItem('email'),
        {
            method: 'delete'
        })
        // .then(response => response.json())
        .then(response => window.location.reload())
    } // need to remove checklist once it's deleted.  gets deleted, but only when refreshed

    render(){
        return (<div>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <div className="panel-title">
                        <div className={this.state.milestone.complete?"completedTodo":""}>
                            <div className={this.state.open?"backgroundPink":""}>
                            <div className="row">
                                <div className="col-xs-2">
                                    {/* <small className="donedone text-muted"><label htmlFor="checkbox">done</label></small> */}
                                    <div className="checkbox">
                                        <label><input type="checkbox" value="true" onChange={this.completed} checked={this.state.milestone.complete} /></label>
                                    </div>
                                </div>
                                <div className={this.state.open?"whiteFont":""}>
                                <div className="col-xs-10" onClick={() => this.setState({open:!this.state.open})}>
                                    <h4 style={{textDecoration:this.state.milestone.complete?'line-through':''}} >{this.state.milestone.complete}{this.state.milestone.title}</h4>
                                    <small>Due Date: </small>
                                    <small>{moment(this.state.milestone.date).format('L')}</small>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className={this.state.open?"panel-body":"panel-body panel-body-collapse"}>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="form-group">
                                <label htmlFor="notes">Notes:</label>

                                <textarea className="form-control" rows="3"  id="notes" onChange={this.note} value={this.state.milestone.note||''}></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 checklistSave">
                            <button className="btn btn-default saveBtn" onClick={this.updateItem}>Save</button>
                        </div>
                        <div className="col-sm-6 text-right checklistDelete">
                            <button className="btn btn-default deleteBtn" onClick={this.deleteItem}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
}

export default ChecklistItem
