import React from "react"
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import Home from './components/Home'
import Agreement from './components/Agreement'
import Questions from './components/Questions'
// import Checklist from './components/Checklist'
import Vendor from './components/Vendor'
import Addevent from './components/Addevent'


document.addEventListener('DOMContentLoaded', function(event) {
    ReactDOM.render(
        <Router history={browserHistory}>
            <Route path="/home" component={Home} />
            <Route path="/event/agreement" component={Agreement} />
            <Route path="/event/questions" component={Questions} />
            {/* <Route path="/event/checklist" component={Checklist} /> */}
            <Route path="/event/vendor" component={Vendor} />
            <Route path="/event/addevent" component={Addevent} />
        </Router>
        ,document.getElementById('app')
    )
})
