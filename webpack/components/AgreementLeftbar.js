import React from 'react'
import { Link } from 'react-router'
import Nav from './Nav'
import Footer from './Footer'

class AgreementLeftbar extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (<div>
                        <div className="leftAgreeFiles">
                          <div className="row">
                            <div className="col-sm-12">
                              <h1>Files</h1>
                              <hr />
                              <h4>Venue</h4>
                            </div>
                          </div>
                        </div>
                      </div>
        )
    }
}

export default AgreementLeftbar
