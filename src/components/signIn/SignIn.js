import React from "react";
import "./signIn.scss";
function SignIn() {
  const login = (e) => {
    e.preventDefault();
  };
  const register = () => {};
  return (
    <div className="signIn">
      <img
        src="https://logodownload.org/wp-content/uploads/2019/03/linkedin-logo.png"
        alt="LinkedIn"
      />
      <form action="SignIn" onSubmit={login}>
        <input type="text" placeholder="Full name (required if registering)" />
        <input
          type="text"
          placeholder="Profile picture URL(optional, only if registering)"
        />
        <input type="text" placeholder="Email" />
        <input type="Password" placeholder="Password" />
        <button type="submit" onClick={() => {}}>
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
