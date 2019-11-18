import React from "react"
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import { useAccounts } from "../hooks"
import City from './City'
import Cata from './Cata'
import Posts from './Posts'
import createPost from './createPost'
import List from './List'
import Grid from './Grid'
import '../styles/main.css'

function App(){
  return (
    <Router>
    <div>
    <Route exact path ="/" component={City} />
    <Route path ="/Cata" component={Cata} />
    <Route path ='/Posts/:id' component ={Posts} />
    <Route path ='/CreatePost' component ={createPost} />
    <Route path ='/List' component={List} />
    <Route path ='/Grid' component={Grid} />
    </div>
    </Router>
  )
}

export default App
