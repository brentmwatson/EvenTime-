import React from 'react'
import { Link } from 'react-router'
import Nav from './Nav'
import Footer from './Footer'

class HomeLeftbar extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (<div>
            <div className="row">
                <div className="col-sm-12">
                    <img src="/images/bandw.jpg" alt="picture of a cake"></img>
                </div>
            </div>
        </div>
    )
}
}

export default HomeLeftbar
