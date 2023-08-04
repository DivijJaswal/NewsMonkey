import NavBar from './components/NavBar';
import News from './components/News';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from 'react'

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API;
  render() {
    return (
      <BrowserRouter>
      <div>
         <NavBar/>
         <Routes>
            <Route exact path="/" element={<News key="" pagesize={5} country="in" apiKey={this.apiKey} category={'general'}/>}>
            </Route>
             <Route exact path="/technology" element={<News key="technology" pagesize={5} country="in" apiKey={this.apiKey} category="technology"/>}>
            </Route>
            <Route exact path="/sports" element={<News key="sports"  pagesize={5} country="in" apiKey={this.apiKey} category="sports"/>}>
            </Route>
            <Route exact path="/business" element={<News key="business"  pagesize={5} country="in" apiKey={this.apiKey} category="business"/>}>
            </Route>
            <Route exact path="/entertainment" element={<News key="entertainment"  pagesize={5} country="in" apiKey={this.apiKey} category="entertainment"/>}>
            </Route>
            <Route exact path="/science" element={<News key="science"  pagesize={5} country="in" apiKey={this.apiKey} category="science"/>}>
            </Route> 
         </Routes>
         
      </div>
      </BrowserRouter>
    )
  }
}

