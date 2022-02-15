import React, { useEffect } from "react";
import "./App.scss";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";
import Feed from "./components/feed/Feed.js";
import SignIn from "./components/signIn/SignIn";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./redux/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";
import Widgets from "./components/widgets/Widgets";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });

    return () => {
      unsubscribeAuth();
    };
  }, []);

  return (
    <div className="app">
      {user ? (
        <>
          <Header />
          <div className="body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      ) : (
        <SignIn />
      )}
    </div>
  );
}

export default App;
