import React from 'react'
import { Link } from 'react-router'
import Nav from './Nav'
import Footer from './Footer'
import Leftbar from './Leftbar'
import VendorSingle from './VendorSingle'


class VendorAdd extends React.Component {
    constructor(props){
        super(props)
        this.addBusiness = this.addBusiness.bind(this)
        this.state = {
            name: '',
            phone: '',
            category: '',
            email: '',
            street: '',
            city: '',
            zip: '',
            state: '',
            first: '',
            last: '',
        }
    }
    addBusiness() {
        let user = JSON.parse(sessionStorage.getItem('user'))
        var vendor = {
            vendor: {
                name: this.state.name,
                phone: this.state.phone,
                category: this.state.category,
                email: this.state.email,
                street: this.state.street,
                city: this.state.city,
                zip: this.state.zip,
                state: this.state.state,
                first: this.state.first,
                last: this.state.last,
            },
            event_id: user.events[0].id,
            user_token: sessionStorage.getItem('auth_token'),
            user_email: sessionStorage.getItem('email')
        }
        console.log(vendor)
        fetch('/api/vendor', {
            body: JSON.stringify(vendor),
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
                                            <input type="text" className="form-control" id="username" placeholder="Enter Business Name" value={this.state.name} onChange={(e) => this.setState({name:e.target.value})}/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 text-left">
                                        <div className="form-group">
                                            <label htmlFor="vendorCat">Category</label>
                                            <input type="text" className="form-control" id="category" placeholder="Enter Category" value={this.state.category} onChange={(e) => this.setState({category:e.target.value})}/>

                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6 text-left">
                                        <div className="form-group">
                                            <label htmlFor="phonenumber">Phone Number</label>
                                            <input type="text" className="form-control" id="vaPhone" placeholder="(xxx)-(xxx)-(xxxx)" maxLength="10" value={this.state.phone} onChange={(e) => this.setState({phone:e.target.value})}/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 text-left">
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input type="text" className="form-control" id="vaEmail" placeholder="enter email" value={this.state.email} onChange={(e) => this.setState({email:e.target.email})}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="form-group">
                                            <label htmlFor="username"> Street Address</label>
                                            <input type="text" className="form-control" id="vaStreetaddress" placeholder="Enter street address" value={this.state.street} onChange={(e) => this.setState({street:e.target.value})}/>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="form-group">
                                            <label htmlFor="username"> City </label>
                                            <input type="text" className="form-control" id="vaCity" placeholder="Enter City" value={this.state.city} onChange={(e) => this.setState({city:e.target.value})}/>
                                        </div>
                                    </div>
                                <div className="col-sm-2">
                                    <div className="form-group">
                                        <label htmlFor="state"> State</label>
                                        <input type="email" className="form-control" id="vaState" placeholder="IN" maxLength="2" value={this.state.state} onChange={(e) => this.setState({state:e.target.value})} />
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
                                            <input type="text" className="form-control" id="vaFirst_name" placeholder="Enter Contact First Name" value={this.state.first} onChange={(e) => this.setState({first:e.target.value})}/>
                                        </div>
                                        </div>
                                        <div className="col-sm-6 text-left">
                                            <div className="form-group">
                                                <label htmlFor="last a e"> Contact Last Name</label>
                                                <input type="text" className="form-control" id="vaLast_name" placeholder="Enter Contact Last Name" value={this.state.last} onChange={(e) => this.setState({last:e.target.last})}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="form-group"> <button className="btn btn-default pull-right" onClick={this.addBusiness}>Add Business</button>
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
