import React, { Component } from 'react'
import Navbar from './componenets/Navbar'
import News from './componenets/News'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default class App extends Component {
  pageSize=5
  render() {
    return (
      <div>
       <Router>
        <Navbar/>
        <Routes>
        <Route exact path="/" element={<News pageSize={this.pageSize} country="in" key="general" category="general"/>}/>
        <Route exact path="/business" element={<News pageSize={this.pageSize} country="in" key="business" category="business"/>}/>
        <Route exact path="/entertainment" element={<News pageSize={this.pageSize} country="in" key="entertainment" category="entertainment"/>}/>key="" 
        <Route exact path="/general" element={<News pageSize={this.pageSize} country="in" key="general" category="general"/>}/>
        <Route exact path="/health" element={<News pageSize={this.pageSize} country="in" key="health" category="health"/>}/>
        <Route exact path="/science" element={<News pageSize={this.pageSize} country="in" key="science" category="science"/>}/>
        <Route exact path="/sports" element={<News pageSize={this.pageSize} country="in" key="sports" category="sports"/>}/>
        <Route exact path="/technology" element={<News pageSize={this.pageSize} country="in" key="technology" category="technology"/>}/>
        </Routes>
        </Router>
      </div>
    )
  }
}
