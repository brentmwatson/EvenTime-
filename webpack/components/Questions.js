import React from 'react'
import { Link, browserHistory } from 'react-router'
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
        var event_id = sessionStorage.getItem('event_id')
        console.log(questions)
        fetch('/event/questions?' + 'user_token=' + sessionStorage.getItem('auth_token') + '&user_email=' + sessionStorage.getItem('email'), {
                body: JSON.stringify({
                    questions: questions,
                    event_id: event_id
                }),
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        .then(response => response.json())
        .then(response => {
            console.log(response)
            let user = JSON.parse(sessionStorage.getItem('user'))
            user.events[0] = response.event
            sessionStorage.setItem('user', JSON.stringify(user))
            browserHistory.push('/home')
        })
    }

    render(){

        return (<div className="questionPage backgroundImagePic">
            <Nav />
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
                                            <span className="questionTitle">Questions</span>
                                        </div>
                                    </div>
                                    <hr />
                                            <QuestionsItem id="1" label="Do you have a venue?" onChange={this.updateQuestion}/>
                                            <QuestionsItem id="2" label="Do you have a caterer?"  onChange={this.updateQuestion}/>
                                            <QuestionsItem id="3" label="Are you having a ceremony?"  onChange={this.updateQuestion}/>
                                            <QuestionsItem id="4" label="Are you having a rehearsal dinner?"  onChange={this.updateQuestion}/>
                                            <QuestionsItem id="5" label="Are you having a cocktail hour?"  onChange={this.updateQuestion}/>
                                            <QuestionsItem id="6" label="Are you having a bar?"  onChange={this.updateQuestion}/>
                                            <QuestionsItem id="7" label="Do you have a florist?"  onChange={this.updateQuestion}/>
                                            <QuestionsItem id="8" label="Do you have a Photographer?"  onChange={this.updateQuestion}/>
                                            <QuestionsItem id="9" label="Do you have a Videographer?"  onChange={this.updateQuestion}/>
                                            <QuestionsItem id="10" label="Do you have a wedding cake?"  onChange={this.updateQuestion}/>
                                            <QuestionsItem id="11" label="Are you having a Dj?"  onChange={this.updateQuestion}/>
                                            <QuestionsItem id="12" label="Are you having a Band?"  onChange={this.updateQuestion}/>
                                            <QuestionsItem id="13" label="Do you need hotels for your guests?"  onChange={this.updateQuestion}/>
                                            <QuestionsItem id="14" label="Are you planning to have a dessert or candy bar?" onChange={this.updateQuestion}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <button type="button" className="btn btn-default btn-lg questionBtn" onClick={this.fireOffQuestions}>Submit</button>
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
