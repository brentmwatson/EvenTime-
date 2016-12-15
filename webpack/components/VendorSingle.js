import React from 'react'
import { Link } from 'react-router'


class VendorSingle extends React.Component {
    constructor(props){
        super(props)
        this.deleteItem = this.deleteItem.bind(this)
        this.updateItem = this.updateItem.bind(this)
        this.state = {
            vendor: props.vendor,
        }
    }
    updateItem() {
        fetch('/api/vendors/' + this.state.vendor.id + '?user_token=' +  sessionStorage.getItem('auth_token') + '&user_email=' + sessionStorage.getItem('email'),
        {
            method: 'put',
            body: JSON.stringify(this.state.vendor),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        //.then(response => console.log(response))
        .then(response => window.location.reload())
    }
    deleteItem() {
        fetch('/api/vendors/' + this.state.vendor.id + '?user_token=' +  sessionStorage.getItem('auth_token') + '&user_email=' + sessionStorage.getItem('email'),
        {
            method: 'delete'
        })
        .then(response => response.json())
        .then(response => window.location.reload())
    }
    render(){
        return (<div>
            <div className="panel panel-default">
                <div className="panel-body">
                    <div className="row">
                        <div className="col-sm-4 text-left">
                            <h3>{this.state.vendor.contact.name}</h3>
                        </div>
                        <div className="col-sm-4 text-center">
                            <h3>{this.state.vendor.contact.role}</h3>
                        </div>
                        <div className="col-sm-4 text-center">
                            <h3>{this.state.vendor.contact.phone_num}</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 text-right">
                            <h5>{this.state.vendor.address.street}</h5>
                        </div>
                        <div className="col-sm-3 text-right">
                            <h5>{this.state.vendor.address.city},{this.state.vendor.address.state}</h5>
                        </div>
                        <div className="col-sm-3 text-left">
                            <h5>{this.state.vendor.address.zip}</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 text-right">
                            <h5>{this.state.vendor.contact.email}</h5>
                        </div>
                        <div className="col-sm-6 text-right">
                            <h5>{this.state.vendor.contact.f_name} {this.state.vendor.contact.l_name}</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 vendorSave">
                            <button className="btn btn-default saveVBtn" onClick={this.updateItem}>Update</button>
                        </div>
                        <div className="col-sm-6 text-right vendorDelete">
                            <button className="btn btn-default deleteVBtn" onClick={this.deleteItem}>Delete</button>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    )
}
}

export default VendorSingle
