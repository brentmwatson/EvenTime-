import React from 'react'
import { Link } from 'react-router'
import moment from 'moment'
var DatePicker = require('react-datepicker');

class ChecklistItem extends React.Component {
    constructor(props){
        super(props)
        //this.handleDate = this.handleDate.bind(this)
        //this.handleChangeTextarea = this.handleChangeTextarea.bind(this)
        //this.singleItem = this.singleItem.bind(this)
        this.state = {
            completed: '',
            note: '',
            title: '',
            date: '',
            id: ''
        }
    }
    // handleChangeTextarea(event) {
    //   this.setState({value: event.target.value});
    // }

    singleItem() {
        //update this item block
    }
    render(){
        return (<div>
            <div className="panel panel-default">
                <div className="panel-heading"  >
                    <div className="panel-title">
                        <div className="row">
                            <div className="col-sm-1">
                                <div className="checkbox">
                                    <label><input type="checkbox" value="" onChange={(e) => this.setState({completed:e.target.checked})} /></label>
                                </div>
                            </div>
                            <div className="col-sm-8">
                                {/* <h4>{this.props.event.milestone.title}</h4> */}<h4>Title</h4>
                            </div>
                            <div className="col-sm-2">
                                {/* <h4>{this.props.event.milestone.date}</h4> */}<h4>date</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-sm-9">
                            <div className="form-group">
                                <label htmlFor="notes">Notes:</label>
                                <textarea className="form-control" rows="3"  id="notes" onChange={(e) => this.setState({note:e.target.value})}></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <button className="btn btn-default" onClick={this.singleItem}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
}

export default ChecklistItem
