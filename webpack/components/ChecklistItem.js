import React from 'react'
import { Link } from 'react-router'
import moment from 'moment'
var DatePicker = require('react-datepicker');

class ChecklistItem extends React.Component {
    constructor(props){
        super(props)
        this.handleDate = this.handleDate.bind(this)
        //this.handleChangeTextarea = this.handleChangeTextarea.bind(this)
        this.singleItem = this.singleItem.bind(this)
        this.state = {
            cakeOrdered: false,
            note: '',
            date: moment()
        }
    }
    // handleChangeTextarea(event) {
    //   this.setState({value: event.target.value});
    // }
    handleDate(e) {
      console.log(e)
      this.setState({
      date: e
    });
    }
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
                                    <label><input type="checkbox" value="" onChange={(e) => this.setState({cakeOrdered:e.target.checked})} /></label>
                                </div>
                            </div>
                            <div className="col-sm-11">
                                <h4>{this.props.milestone.title}</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={this.state.cakeOrdered?"panel-body":"panel-body panel-body-collapse"}>
                    <div className="row">
                        <div className="col-sm-9">
                            <div className="form-group">
                                <label htmlFor="notes">Notes:</label>
                                <textarea className="form-control" rows="3" value={this.state.textarea} id="notes" onChange={(e) => this.setState({note:e.target.value})}></textarea>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="form-group">
                                <label htmlFor="checklistCat">Vendor</label>
                                <select className="form-control" name="checklistCat" id="checklistCat">
                                    <option>Spring Hall</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <button className="btn btn-default" onClick={this.singleItem}>Submit</button>
                        </div>
                        <div className="col-sm-3">
                            <DatePicker
                                    selected={this.state.date}
                                    onChange={this.handleDate} />
                        </div>
                        <div className="col-sm-1 pull-right">
                            <i className="fa fa-trash fa-2x" aria-hidden="true"></i>
                        </div>
                            <div className="col-sm-1 pull-right">
                                <i className="fa fa-pencil fa-2x" aria-hidden="true"></i>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

    )
}
}

export default ChecklistItem
