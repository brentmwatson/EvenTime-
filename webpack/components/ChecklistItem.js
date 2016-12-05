import React from 'react'
import { Link } from 'react-router'


class ChecklistItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            cakeOrdered: false
        }
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
                                <label htmlFor="checklistCat">Category</label>
                                <select className="form-control" name="checklistCat" id="checklistCat">
                                    <option>Venue</option>
                                    <option>Ceremony</option>
                                    <option>Caterer</option>
                                    <option>Cake</option>
                                    <option>DJ</option>
                                    <option>Band</option>
                                    <option>Decorator</option>
                                    <option>Florist</option>
                                    <option>Event Planner</option>
                                    <option>Photographer</option>
                                    <option>Videographer</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <button className="btn btn-default">Submit</button>
                            <div className="col-sm-3">
                                <i className="fa fa-pencil fa-2x" aria-hidden="true"></i>
                            </div>
                            <div className="col-sm-3">
                                <i className="fa fa-trash fa-2x" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End ChecklistItem component... -> */}
        </div>
    )
}
}

export default ChecklistItem
