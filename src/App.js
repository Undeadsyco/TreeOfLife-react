import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux'

import './App.css';
import Home from './components/screens/home/home';
import { getPrimeButtons, assignPrimeButtons, getSecondButtons, assignSecondButtons} from './actions/index'

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <div>
          <h2>the tree of life</h2>
        </div>
        <Router>
          <div className="nav">
              <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li>Tree Of Life: 
                      <div className="sub-menu-1">
                          <ul>
                              <li><Link to="/eubacteria">Eubacteria</Link></li>
                              <li><Link to="/eukaryotes">Eukaryotes</Link></li>
                              <li><Link to="/archaea">Archaea</Link></li>
                          </ul>
                      </div>
                  </li>
              </ul>
              <Route exact path="/" render={()=> <Home {...this.props}/>} />
              <Route path="/about" component="About" />
              <Route path="/eubacteria" component="Eubacteria" />
              <Route path="/eukaryotes" component="Eukaryotes" />
              <Route path="/archaea" component="Archaea" />
          </div>
        </Router>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch, state) {
  return {
    onAssignPrimeButtons: ()=> getPrimeButtons().then(primeButtons => dispatch(assignPrimeButtons(primeButtons))),
    onAssignSecondButtons: (id) => getSecondButtons(id).then(secondButtons => dispatch(assignSecondButtons(secondButtons)))
  }
}

function mapStateToProps(state) {
  return {
    primeButtons: state.primeButtons,
    secondButtons: state.secondaryButtons
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);