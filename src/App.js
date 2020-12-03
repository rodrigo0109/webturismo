import React from 'react'
import Navbar from './componentes/Navbar'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import './App.css';
import Home from './componentes/Paginas/Home'
import Services from './componentes/Paginas/Services'
import Products from './componentes/Paginas/Products'
import SignUp from './componentes/Paginas/SignUp'

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services}/>
        <Route path='/products' component={Products}/>
        <Route path='/sign-up' component={SignUp}/>
      </Switch>
    </Router>
      
    </>
  );
}

export default App;
