import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {BrowserRouter,Routes,Route} from 'react-router-dom'


export default class App extends Component {
  render() {
    return (
      <>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path='/' element={<News pageSize={5} country="us" category="science"/>}/>
        </Routes>
      </BrowserRouter>
      </>
    )
  }
}

