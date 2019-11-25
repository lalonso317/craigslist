import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Cata from './Cata'
import Posts from './Posts'
import createPost from './createPost'
// import List from './List'
// import Grid from './Grid'
import '../styles/main.css'

function App(props){
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path ="/" component={Cata} />
        <Route exact path ='/createPost/:slug/:id' component ={createPost} />
        <Route exact path ='/Posts/:slug/:id' component ={Posts} />
        {/* <Route exact path ='/List' component={List} />
        <Route exact path ='/Grid' component={Grid} /> */}
      </Switch>
    </div>
    </Router>
  )
}

export default App
