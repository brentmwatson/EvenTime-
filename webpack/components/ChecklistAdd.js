import React from 'react'
import { Link } from 'react-router'
import ChecklistItem from './ChecklistItem'
import moment from 'moment'
var DatePicker = require('react-datepicker');

class ChecklistAdd extends React.Component {
    constructor(props){
        super(props)
        this.addTodo = this.addTodo.bind(this)
        this.handleChangeTextera = this.handleChangeTextera.bind(this)
        this.state={

        }
    }
    handleChangeTextera(event) {
      this.setState({value: event.target.value});
    }
    addTodo() {
        var questions = this.state.questions
        console.log(questions)
        fetch('/api/milestones' + 'user_token=' + sessionStorage.getItem('auth_token') + '&user_email=' + sessionStorage.getItem('email'), {
                body: JSON.stringify({questions: questions}),
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        .then(response => response.json())
        .then(response => {
            console.log(response)
            window.location.reload()
        })
    }

    render(){

        return (<div>
            <div className="col-sm-12 text-center">
                <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                    <div className="panel panel-default">
                        <div className="panel-heading" role="tab" id="headingOne">
                            <h4 className="panel-title">
                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Add a New Todo
                                </a>
                            </h4>
                        </div>
                        <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-sm-9">
                                        <div className="form-group">

                                            <input type="text" placeholder="add a new todo" className="form-control" id="add"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="form-group">
                                            <label htmlFor="addBusinessName"> Business Name</label>
                                            <input type="text" className="form-control" id="addBusinessName" placeholder="Enter Name" />
                                        </div>
                                    </div>
                                    </div>
                                <div className="row">
                                    <div className="col-sm-9">
                                        <div className="form-group">
                                            <label htmlFor="addNotes">Notes:</label>
                                            <textarea className="form-control" rows="3" id="addNotes" value={this.state.textera} onChange={(e) => this.setState({addnote:e.target.value})}></textarea>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="form-group">
                                            <button className="btn btn-default" onClick={this.addTodo}>Add Todo</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
}

export default ChecklistAdd
