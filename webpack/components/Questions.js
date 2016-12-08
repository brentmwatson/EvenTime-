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
        this.updateQuestion = this.updateQuestion.bind(this)
        this.state= {
            questions: []
        }
    }
    updateQuestion(event){
        var updatedQuestions = this.state.questions
        updatedQuestions[Number(event.target.id)] = (event.target.value === 'yes')
        this.setState({questions: updatedQuestions})
    }
    fireOffQuestions(){
        var questions = this.state.questions
        console.log(questions)
        fetch('/api/milestones/starter?' + 'user_token=' + sessionStorage.getItem('auth_token') + '&user_email=' + sessionStorage.getItem('email'), {
                body: JSON.stringify({questions: questions}),
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        .then(response => response.json())
        .then(response => {
            console.log(response)
            window.location.href = '/home'
        })
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
                                            <QuestionsItem id="1" label="Do you have a venue?" onChange={this.updateQuestion}/>
                                            <QuestionsItem id="2" label="Do you have a caterer?" value="" onChange={this.updateQuestion}/>
                                            <QuestionsItem id="3" label="Are you having a ceremony?" value="" onChange={this.updateQuestion}/>
                                            <QuestionsItem id="4" label="Are you having a rehearsal dinner?" value="" onChange={this.updateQuestion}/>
                                            <QuestionsItem id="5" label="Are you having a cocktail hour?" value="" onChange={this.updateQuestion}/>
                                            <QuestionsItem id="6" label="Are you having a bar?" value="" onChange={this.updateQuestion}/>
                                            <QuestionsItem id="7" label="Do you have a florist?" value="" onChange={this.updateQuestion}/>
                                            <QuestionsItem id="8" label="Do you have a Photographer?" value="" onChange={this.updateQuestion}/>
                                            <QuestionsItem id="9" label="Do you have a Videographer?" value="" onChange={this.updateQuestion}/>
                                            <QuestionsItem id="10" label="Do you have a wedding cake?" value="" onChange={this.updateQuestion}/>
                                            <QuestionsItem id="11" label="Are you having a Dj?" value="" onChange={this.updateQuestion}/>
                                            <QuestionsItem id="12" label="Are you having a Band?" value="" onChange={this.updateQuestion}/>
                                            <QuestionsItem id="13" label="Do you need hotels for your guests?" value="" onChange={this.updateQuestion}/>
                                            <QuestionsItem id="14" label="Are you planning to have a dessert or candy bar?" value="" onChange={this.updateQuestion}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <button type="button" className="btn btn-default" onClick={this.fireOffQuestions}>Submit</button>
                                    </div>
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
