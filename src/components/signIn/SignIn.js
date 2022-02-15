import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../../firebase/firebase";
import { login } from "../../redux/userSlice";
import "./signIn.scss";
function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profileURL, setProfileURL] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password);
  };
  const register = () => {
    if (!name) {
      return alert("Please enter a full name!");
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        updateProfile(userAuth.user, {
          displayName: name,
          photoURL: profileURL,
        }).then(() => {
          dispatch(
            login({
              email: userAuth.email,
              uid: userAuth.uid,
              displayName: name,
              photoURL: profileURL,
            })
          );
        });
      })
      .catch((error) => alert(error));
  };
  return (
    <div className="signIn">
      <img
        src="https://logodownload.org/wp-content/uploads/2019/03/linkedin-logo.png"
        alt="LinkedIn"
      />
      <form action="SignIn" onSubmit={loginToApp}>
        <input
          type="text"
          placeholder="Full name (required if registering)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Profile picture URL(optional, only if registering)"
          value={profileURL}
          onChange={(e) => setProfileURL(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="Password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?
        <span className="register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default SignIn;
