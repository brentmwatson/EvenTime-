import React from 'react'
import { Link } from 'react-router'
import Nav from './Nav'
import Footer from './Footer'
import Leftbar from './Leftbar'
import VendorSingle from './VendorSingle'


class VendorAdd extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (<div>
            <div className="col-sm-12 text-center">
                <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                    <div className="panel panel-default">
                        <div className="panel-heading" role="tab" id="headingOne">
                            <h4 className="panel-title">
                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Add a Business
                                </a>
                            </h4>
                        </div>
                        <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-sm-6 text-left">
                                        <div className="form-group">
                                            <label htmlFor="username">Business Name</label>
                                            <input type="text" className="form-control" id="username" placeholder="Enter Business Name" required/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 text-left">
                                        <div className="form-group">
                                            <label htmlFor="vendorCat">Category</label>
                                            <select className="form-control" name="vendorCat" id="vendorCat">
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
                                    <div className="col-sm-6 text-left">
                                        <div className="form-group">
                                            <label htmlFor="phonenumber">Phone Number</label>
                                            <input type="text" className="form-control" id="vaPhone" placeholder="(xxx)-(xxx)-(xxxx)" maxLength="10" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 text-left">
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input type="text" className="form-control" id="vaEmail" placeholder="enter email" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div className="col-sm-4">
                                        <div className="form-group">
                                            <label htmlFor="username"> Street Address</label>
                                            <input type="text" className="form-control" id="vaStreetaddress" placeholder="Enter street address" required/>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="form-group">
                                            <label htmlFor="username"> City </label>
                                            <input type="text" className="form-control" id="vaCity" placeholder="Enter City"/>
                                        </div>
                                    </div>
                                <div className="col-sm-2">
                                    <div className="form-group">
                                        <label htmlFor="state"> State</label>
                                        <input type="email" className="form-control" id="vaState" placeholder="IN" maxLength="2" />
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="form-group">
                                        <label htmlFor="username"> Zip</label>
                                        <input type="email" className="form-control" id="vaZip" placeholder="Enter zip" maxLength="5" />
                                    </div>
                                </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6 text-left">
                                        <div className="form-group">
                                            <label htmlFor="firstname"> Contact First Name</label>
                                            <input type="text" className="form-control" id="vaFirst_name" placeholder="Enter Contact First Name" />
                                        </div>
                                        </div>
                                        <div className="col-sm-6 text-left">
                                            <div className="form-group">
                                                <label htmlFor="last a e"> Contact Last Name</label>
                                                <input type="text" className="form-control" id="vaLast_name" placeholder="Enter Contact Last Name" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="form-group"> <button className="btn btn-default pull-right">Add Business</button>
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

export default VendorAdd
