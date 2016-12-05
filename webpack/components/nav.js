import React from 'react'
import { Link } from 'react-router'


class Nav extends React.Component {
    constructor(props){
        super(props)
        this.signout=this.signout.bind(this)

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
                        <div className="col-sm-6 text-left">
                            <ul className="list-unstyled list-inline">
                                <Link to="/home"><li>Eventime</li></Link>
                                <Link to="/event/checklist"><li>Checklist</li></Link>
                                <Link to="/event/vendor"><li>Vendor Info</li></Link>
                                <Link to="/event/agreement"><li>Agreement</li></Link>
                            </ul>
                        </div>
                        <div className="col-sm-6 text-right">
                            <ul className="list-unstyled list-inline pull-right">
                                <li><div className="form-group"> <button className="btn btn-default" onClick={this.signout}>Log Out</button>
                            </div></li>
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
