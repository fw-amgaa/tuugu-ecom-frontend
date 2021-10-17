import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import Magazine from './pages/Magazine'
import AddMagazine from './pages/AddMagazine'
import Home from './pages/Home'

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/add-magazine">
          <AddMagazine />
        </Route>
        <Route path="/magazine/:id">
          <Magazine />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
