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
        <h4>{date}</h4>
        <h4>180 days left</h4>
        <h4> progress bar....</h4>
        <h4>3 out of 100 tasks done</h4>
        <h4>Completed Todos</h4>
      </div>
    </div>
  </div>
</div>
</div>
        )
    }
}

export default Leftbar
