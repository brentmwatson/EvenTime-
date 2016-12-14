import React from 'react'
import { Link } from 'react-router'

class Footer extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (<div>
            <div className="container-fluid footer-container">
              <div className="row">
                <div className="col-sm-4">
            <a href="https://www.facebook.com/EvenTimeGO/"><i className="fa fa-facebook-official fa-2x footerIcons" aria-hidden="true"></i></a>
            <a href="https://twitter.com/EvenTimeGo"><i className="fa fa-twitter-square fa-2x footerIcons" aria-hidden="true"></i></a>
            <a href="https://www.instagram.com/beautifulmiem/"><i className="fa fa-instagram fa-2x footerIcons" aria-hidden="true"></i></a>
                </div>
                <div className="col-sm-6">
              <h4>&copy; Watson and Kim Production 2016</h4>
                </div>


              </div>
            </div>
            </div>
        )
    }
}

export default Footer
