import React from 'react'
import { Link } from 'react-router'
import moment from 'moment'

class Leftbar extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    var date = moment().format('LL')
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="leftSummary">
            <div className="row">
              <div className="col-sm-12">
                <h1>Summary</h1>
                <hr />
                <h5>{date}</h5>
                <h5>180 days left</h5>
                <h5> progress bar....</h5>
                <h5>3 out of 100 tasks done</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Leftbar
