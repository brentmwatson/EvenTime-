import React from 'react'
import { Link } from 'react-router'
import Nav from './Nav'
import NavNewuser from './NavNewuser'
import Footer from './Footer'
import Leftbar from './Leftbar'
import QuestionsLeftbar from './QuestionsLeftbar'

class QuestionsItem extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (<div>
            <div className="row">
                <div className="col-sm-1">
                    <h4>#</h4>
                </div>
                <div className="col-sm-9">
                    <label htmlFor="question1"><h4></h4></label>
                </div>
                <div className="col-sm-1">
                    <div className="radio">
                        <label><input type="radio" name="question1" id="yes1" value="question1yes" />Yes</label>
                    </div>
                </div>
                <div className="col-sm-1">
                    <div className="radio">
                        <label><input type="radio" name="question1" id="no1" value="question1no"/> No</label>
                    </div>
                </div>
            </div>
        </div>

    )
}
}

export default QuestionsItem
