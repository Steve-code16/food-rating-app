import React from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../../utils/firebase";

function Login() {
  // google sign in
  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user);
    } catch (error) {
      console.log(error);
    }
  };

  // facebook log in
  const fbProvider = new FacebookAuthProvider();
  const FaceBookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, fbProvider);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h2>Join Today</h2>
      <div>
        <h3>Login</h3>
        <button onClick={GoogleLogin}>
          <i className="fa fa-google" aria-hidden="true"></i> Sign in with
          google
        </button>
        <button>
          <i className="fa fa-facebook" aria-hidden="true"></i> Sign in with
          facebook
        </button>
      </div>
    </div>
  );
}

export default Login;
