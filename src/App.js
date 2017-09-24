import React, { Component } from 'react';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom';
import logoRight from './assets/img/img-logo-singov.png';
import logoLeft from './assets/img/moe-logo.png';
import RolesList from './components/roles-list/roles-list';
import Home from './components/home/home';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="header">
          <div className="container logo">
            <div className="leftLogo">
              <Link to='/'><img src={logoLeft} alt="Ministry of Education Singapore"/></Link>
            </div>
            <div className="rightLogo">
              <img src={logoRight} alt="Singapore Government"/>
            </div>
          </div>
        </div>
        <div className="container">
            <div className="nav-wrap">
              <nav>
                <ul className="primary">
                  <li className="primary-list -first">
                    <a href="">Education</a>
                    <ul className="sub">
                      <li><a href="">Education System</a></li>
                      <li><a href="">Pre-School</a></li>
                      <li><a href="">Primary</a></li>
                      <li><a href="">Secondary</a></li>
                      <li><a href="">Special Education</a></li>
                      <li><a href="">Post-Secondary</a></li>
                      <li><a href="">Pre-University</a></li>
                      <li><a href="">Private Education</a></li>
                    </ul>
                  </li>
                  <li className="primary-list">
                    <a href="">Admissions</a>
                    <ul className="sub">
                      <li><a href="">Primary One Registration</a></li>
                      <li><a href="">Joint Admissions Exercise</a></li>
                      <li><a href="">Direct Admissions</a></li>
                      <li><a href="">Returning Singaporeans</a></li>
                      <li><a href="">Scholarships</a></li>
                      <li><Link to='/roles'>Roles Maintenance</Link></li>
                    </ul>
                  </li>
                  <li className="primary-list">
                    <a href="">Careers</a>
                    <ul className="sub">
                      <li><a href="">Teach</a></li>
                      <li><a href="">Allied Educators</a></li>
                      <li><a href="">MOE Kindergarten Educators</a></li>
                      <li><a href="">Executive &amp; Administrative Positions</a></li>
                    </ul>  
                  </li>
                  <li className="primary-list">
                    <a href="">News</a>
                    <ul className="sub">
                      <li><a href="">Press Releases</a></li>
                      <li><a href="">Speeches</a></li>
                      <li><a href="">Forum Letter Replies</a></li>
                      <li><a href="">Parliamentary Replies</a></li>
                    </ul>  
                  </li>
                  <li className="primary-list">
                    <a href="">About Us</a>
                    <ul className="sub">
                      <li><a href="">Organisational Structure</a></li>
                      <li><a href="">Publications</a></li>
                      <li><a href="">Compliments</a></li>
                      <li><a href="">Our Service Commitment</a></li>
                    </ul>  
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        <div className="parent-container">
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/roles' component={RolesList}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
