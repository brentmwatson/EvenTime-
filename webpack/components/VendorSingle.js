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
         .then(response => console.log(response))
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
                        <div className="col-sm-12 text-center">
                            <h1 className="vendorListN">Vendor List</h1>
                        </div>
                    </div>
                    <hr />

                    <div className="row">
                        <div className="col-sm-4 text-left">
                            <h3>{this.state.name}</h3>
                        </div>
                        <div className="col-sm-4 text-center">
                            <h3>{this.state.role}</h3>
                        </div>
                        <div className="col-sm-4 text-center">
                            <h3>{this.state.phone_num}</h3>
                        </div>
                    </div>
                     <div className="row">
                        <div className="col-sm-4 text-right">
                            <h5>{this.state.street}</h5>
                        </div>
                        <div className="col-sm-3 text-right">
                            <h5>{this.state.city}, {this.state.state}</h5>
                        </div>
                        <div className="col-sm-3 text-left">
                            <h5>{this.state.zip}</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 text-right">
                            <h5>{this.state.email}</h5>
                        </div>
                        <div className="col-sm-3 text-right">
                            <h5>{this.state.f_name}</h5>
                        </div>
                        <div className="col-sm-3 text-left">
                            <h5>{this.state.l_name}</h5>
                        </div>
                    </div>
                     <div className="row">
                        <div className="col-sm-6 pull-left">
                            <div className="form-group"> <button className="btn btn-default pull-right" onClick={this.updateItem}>update</button>
                        </div>
                    </div>
                    <div className="col-sm-6 pull-right">
                        <div className="form-group"> <button className="btn btn-default pull-right" onClick={this.deleteItem}>delete</button>
                    </div>
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
