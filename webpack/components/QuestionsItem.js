import React from 'react'
import { Link } from 'react-router'


const QuestionsItem = (props) => (
        <div>
            <div className="row">
                <div className="col-sm-1">
                    <h4>{props.id}</h4>
                </div>
                <div className="col-sm-9">
                    <label htmlFor={'answer' + props.id}><h4>{props.label}</h4></label>
                </div>
                <div className="col-sm-1">
                    <div className="radio">
                        <label><input type="radio" name={'answer' + props.id} value="yes" id={props.id} onChange={props.onChange} />Yes</label>
                    </div>
                </div>
                <div className="col-sm-1">
                    <div className="radio">
                        <label><input type="radio" name={'answer' + props.id} value="no" id={props.id} onChange={props.onChange} /> No</label>
                    </div>
                </div>
            </div>
        </div>
    )

export default QuestionsItem
