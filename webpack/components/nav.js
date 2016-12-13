import React from 'react'
import { Link } from 'react-router'


class Nav extends React.Component {
    constructor(props){
        super(props)
        this.signout = this.signout.bind(this)
    }
    signout(){
        fetch('/users/sign_out',{
            method:"delete"
        })
        .then(response => window.location.href='/')
    }

    render(){
        return (<div>
            <nav>
                <div className="container-fluid mainNav">
                    <div className="row">
                        <div className="col-sm-3">
                            <ul className="list-unstyled list-inline">
                                <Link to="/home"><li className="logoTitle">Eventime</li></Link>
                            </ul>
                        </div>
                        <div className="col-sm-3">
                            <ul className="list-unstyled list-inline">
                                {/* <Link to="/event/vendor"><li className="vendorLink">Vendor</li></Link> */}
                            </ul>
                        </div>
                        <div className="col-sm-6 text-right">
                            <ul className="list-unstyled list-inline pull-right">
                                <li><div className="form-group"> <button className="btn btn-default loggingOut" onClick={this.signout}>Log Out</button></div></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}
}

export default Nav
