import React from "react";
import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Feed from "./Feed";
import Widgets from './Widgets';
function App() {
  return (
    //BEM
    <div className="app">

    {/*Side Bar*/}
    <Sidebar />

    {/* Feed */}
    <Feed></Feed>

    {/* Widgets */}
    <Widgets />
    
    </div>
  );
}

export default App;
