import React from 'react'
import { Link } from 'react-router'
import Nav from './Nav'
import NavNewuser from './NavNewuser'
import Footer from './Footer'
import Leftbar from './Leftbar'
import QuestionsLeftbar from './QuestionsLeftbar'
import QuestionsItem from './QuestionsItem'

class Questions extends React.Component {
    constructor(props){
        super(props)
        this.fireOffQuestions = this.fireOffQuestions.bind(this)
    }
    fireOffQuestions(){
        //send brent array of answers of true/false
        var questionData = {

          }
          console.log(eventData)
          fetch('api/milestones/starter' + sessionStorage.getItem('authentication_token') + sessionStorage.getItem('email'), {
                body:JSON.stringify({addquestions: questionData}//need to get with brent with this
                ),
                method: 'POST',
                })
                    //console.log(response)
                .then(response => response.json())
    }

    render(){
//loop goes here for my questionitem

        return (<div>
            <NavNewuser />
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <QuestionsLeftbar />
                        </div>
                        <div className="col-sm-9">
                            <div className="panel panel-default">
                                <div className="panel-body">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <h1>Questions</h1>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <QuestionsItem label="Do you have a venue?" />
                                        </div>
                                    </div>
                                    <h4><div className="form-group"><Link to="/home"> <button className="btn btn-default" onClick={this.fireOffQuestions}>Submit</button></Link>
                                </div></h4>
                                <h4><div className="form-group"><Link to="/event/checklist"> <button className="btn btn-default">to master checklist</button></Link>
                            </div></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    <Footer />
    </div>
)
}
}

export default Questions
