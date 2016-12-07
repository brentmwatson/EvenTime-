import React from 'react'
import { Link } from 'react-router'

//var ques1 = this._inputQ1.value
//ref={(a) => this._inputQ1 = a}
const QuestionsItem = (props) => (
        <div>
            <div className="row">
                <div className="col-sm-1">
                    <h4>{props.id}</h4>
                </div>
                <div className="col-sm-9">
                    <label htmlFor="question"><h4>{props.label}</h4></label>
                </div>
                <div className="col-sm-1">
                    <div className="radio">
                        <label><input type="radio" name={props.label} id="1" value="yes" />Yes</label>
                    </div>
                </div>
                <div className="col-sm-1">
                    <div className="radio">
                        <label><input type="radio" name={props.label} id="1" value="no"/> No</label>
                    </div>
                </div>
            </div>
        </div>

    )


export default QuestionsItem
