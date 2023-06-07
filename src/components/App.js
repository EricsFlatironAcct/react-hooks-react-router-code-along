import React from "react";
import { Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Login from "./Login";
import About from "./About";
function App() {
  return (
    <>
      <NavBar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </>
  );
}

export default App;
