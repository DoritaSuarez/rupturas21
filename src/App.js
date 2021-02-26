import react from "react"
import {CssBaseline, makeStyles} from '@material-ui/core'
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";
import InformalityPage from './pages/informality'
import NotFound from './pages/404'
import Landing from './pages/landing'
import About from './pages/about'


export default function App(){
  return(
    <Router>
      <Switch>
        <Route exact path = "/" component = {Landing}/>
        <Route exact path = "/informality-covid19" component = {InformalityPage}/>
        <Route exact path = "/about" component = {About}/>
        <Route exact path = "/404" component = {NotFound}/>
        <Redirect to="/404"/>
      </Switch>
    </Router>
  )
}