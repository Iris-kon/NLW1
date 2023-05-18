import React from 'react'
import { BrowserRouter, Routes as RDRouter, Route } from 'react-router-dom'

import CreatePoint from './pages/CreatePoint'
import Home from './pages/Home'

const Routes = () => {
  return (
    <BrowserRouter>
      <RDRouter>
        <Route element={<Home />} path="/" />
        <Route element={<CreatePoint />} path="/create-point" />
      </RDRouter>
    </BrowserRouter>
  )
}

export default Routes
