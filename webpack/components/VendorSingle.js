import React from 'react'
import { Link } from 'react-router'


class VendorSingle extends React.Component {
    constructor(props){
        super(props)
        // this.deleteItem = this.deleteItem.bind(this)
        // this.updateItem = this.updateItem.bind(this)
        // this.state = {
        //     vendors: props.vendors,
        // }
    }
    // updateItem() {
    //     fetch('/vendors/' + this.state.milestone.id + '?user_token=' +  sessionStorage.getItem('auth_token') + '&user_email=' + sessionStorage.getItem('email'),
    //     {
    //         method: 'put',
    //         body: JSON.stringify(this.state.vendors),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     .then(response => response.json())
    //      .then(response => console.log(response))
    //     .then(response => window.location.reload())
    // }
    // deleteItem() {
    //     fetch('/api/vendors/' + this.state.milestone.id + '?user_token=' +  sessionStorage.getItem('auth_token') + '&user_email=' + sessionStorage.getItem('email'),
    //     {
    //         method: 'delete'
    //     })
    //     .then(response => response.json())
    //     .then(response => this.setState({milestones:this.state}))
    // }
    render(){
        return (<div>
            <div className="panel panel-default">
                <div className="panel-body">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <h1>Vendor List</h1>
                        </div>
                    </div>
                    <hr />

                    {/* <div className="row">
                        <div className="col-sm-4 text-left">
                            <h3>{this.state.milestone.name}</h3>
                        </div>
                        <div className="col-sm-4 text-center">
                            <h3>{this.state.milestone.category}</h3>
                        </div>
                        <div className="col-sm-4 text-center">
                            <h3>{this.state.milestone.phone}</h3>
                        </div>
                    </div>
                     <div className="row">
                        <div className="col-sm-4 text-right">
                            <h5>{this.state.milestone.street}</h5>
                        </div>
                        <div className="col-sm-3 text-right">
                            <h5>{this.state.milestone.city}, {this.state.milestone.state}</h5>
                        </div>
                        <div className="col-sm-3 text-left">
                            <h5>{this.state.milestone.zip}</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 text-right">
                            <h5>{this.state.milestone.zip}</h5>
                        </div>
                        <div className="col-sm-3 text-right">
                            <h5>{this.state.milestone.first}</h5>
                        </div>
                        <div className="col-sm-3 text-left">
                            <h5>{this.state.milestone.last}</h5>
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
            </div> */}
            <hr />
        </div>
    </div>
</div>
)
}
}

export default VendorSingle
