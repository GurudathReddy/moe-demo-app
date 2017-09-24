import React, { Component } from 'react';
import './App.css';
import logoRight from './assets/img/img-logo-singov.png';
import logoLeft from './assets/img/moe-logo.png';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="header">
          <div className="container logo">
            <div className="leftLogo">
              <img src={logoLeft} alt="Ministry of Education Singapore"/>
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
                      <li><a href="">Roles Maintenance</a></li>
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
        <p className="parent-container">
          
         
        </p>
      </div>
    );
  }
}

export default App;
