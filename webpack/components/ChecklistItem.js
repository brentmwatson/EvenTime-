import React from 'react'
import { Link } from 'react-router'
import moment from 'moment'
var DatePicker = require('react-datepicker');

class ChecklistItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            cakeOrdered: false,
            startDate: moment()
        }
    }
    handleChange(date) {
    this.setState({
      startDate: date
    });
    }
    render(){
        return (<div>
            {/* <!-- Begin ChecklistItem component... -> */}
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
                                <h4>Order Cake</h4>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={this.state.cakeOrdered?"panel-body":"panel-body panel-body-collapse"}>
                    <div className="row">
                        <div className="col-sm-9">
                            <div className="form-group">
                                <label htmlFor="notes">Notes:</label>
                                <textarea className="form-control" rows="3" id="notes"></textarea>
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
                            <button className="btn btn-default">Submit</button>
                        </div>
                        <div className="col-sm-3">
                            <DatePicker
                                    selected={this.state.startDate}
                                    onChange={this.handleChange.bind(this)} />
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
