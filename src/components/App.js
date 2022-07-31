import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from "./Layout"

import "./App.sass"

class App extends Component
{

  render () {
      return <Layout />
  }
}

const root = createRoot(document.getElementById('app'))
root.render(<App tab="home" />)