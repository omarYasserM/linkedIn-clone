import React from "react";
import "./App.scss";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";
import Feed from "./components/feed/Feed.js";
import { connect } from "react-redux";
import SignIn from "./components/signIn/SignIn";
function App({ currentUser }) {
  return (
    <div className="app">
      {currentUser ? (
        <>
          <Header />
          <div className="body">
            <Sidebar />
            <Feed />
          </div>
        </>
      ) : (
        <SignIn />
      )}
    </div>
  );
}

const mapStateToProps = ({ currentUser }) => ({
  currentUser,
});
export default connect(mapStateToProps)(App);
