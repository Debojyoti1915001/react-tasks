import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './login/login'
import Dashboard from './dashboard/dashboard'

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route exact path='/' element={
                <>
                  <>Landing</>
                </>
              }>
            </Route>
            <Route path="/login" element={
              <Login/>
            }>

            </Route>
            <Route path="/dashboard" element={
              <Dashboard/>
            }>

            </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
