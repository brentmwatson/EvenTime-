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
        this.updateState = this.updateState.bind(this)
        this.state= {
            id:''

        }
    }
    updateState(event){
        var updatedState={}
        updatedState[event.target.id] = event.target.value
        this.setState(updatedState)
    }
    fireOffQuestions(){
        var questionData = {
            id:this.state.value
          }
          console.log(questionData)
        //   fetch('api/milestones/starter' + sessionStorage.getItem('authentication_token') + sessionStorage.getItem('email'), {
        //         body:JSON.stringify({questions: questionData}//need to get with brent with this
        //         ),
        //         method: 'POST',
        //         })
        //             //console.log(response)
        //         .then(response => response.json())
    }

    render(){

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
                                            <QuestionsItem id="1" label="Do you have a venue?" value="yes" onChange={this.updateState}/>
                                            <QuestionsItem id="2" label="Do you have a caterer?" value="" onChange={this.updateState}/>
                                            <QuestionsItem id="3" label="Are you having a ceremony?" value="" onChange={this.updateState}/>
                                        </div>
                                    </div>
                                    <h4><div className="form-group"><Link to="/home"> <button className="btn btn-default" onClick={this.fireOffQuestions}>Submit</button></Link>
                                </div></h4>
                                {/* <h4><div className="form-group"><Link to="/event/checklist"> <button className="btn btn-default">to master checklist</button></Link>
                            </div></h4> */}
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
