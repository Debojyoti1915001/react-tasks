import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom"


function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route exact path='/' element={
                <>
                  <Landing/>
                </>
              }>
            </Route>
            <Route path="/login" element={
              <Login/>
            }>

            </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
