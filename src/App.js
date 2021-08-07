import React from 'react'
import './index.css';
// import AddUser from './components/AddUser'
import AllUsers from './components/AllUsers'
import Interview from './components/Interview'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NotFound from './components/NotFound'
import EditUser from './components/EditUser';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Switch>
      <Route exact path="/" component={Interview}/>
      <Route exact path="/all" component={AllUsers }/>
      {/* <Route exact path="/add" component={AddUser }/> */}
      <Route path="/edit/:id" component={EditUser}/>
      <Route component={NotFound }/>
      </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
