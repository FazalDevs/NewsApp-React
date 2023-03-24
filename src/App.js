import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { Routes, Route } from 'react-router-dom'
export class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<News category="general" />} />
          <Route path="/business" element={<News category="business" />} />
          <Route path="/entertainment" element={<News category="entertainment" />} />
          <Route path="/sports" element={<News category="sports" />} />
          <Route path="/science" element={<News category="science" />} />
          <Route path="/technology" element={<News category="technology" />} />
        </Routes>
      </div>
    )
  }
}

export default App
