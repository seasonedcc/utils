import React from 'react'
import { Router } from '@reach/router'
import Example from './Example'

import './App.css'

const App = () => (
  <div className="App">
    <Router basepath="/">
      <Example path="/" />
    </Router>
  </div>
)

export default App