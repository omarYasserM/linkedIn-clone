import React from "react";
import "./App.scss";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import Feed from "./components/feed";
function App() {
  return (
    <div className="app">
      <Header />

      {/* App Body */}
      <div className="body">
        <Sidebar />
        <Feed />
      </div>

      {/* Widgets */}
    </div>
  );
}

export default App;
