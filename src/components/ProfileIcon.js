import { useRef, useState } from "react";

import { signup, login, logout, useAuth } from "./Firebase";
import Profile from "./NewProfile";
// import '../components/NewProfile.css'

export default function App() {
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();
  const dobRef = useRef();
  const usernameRef = useRef();

  async function handleSignup() {
    setLoading(true);
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  async function handleLogin() {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  return (
    <div className="profuul">
    <div id="main">
      <div>Currently logged in as: {currentUser?.email} </div>

      {!currentUser && (
        <>
          <div className="fields">
            <input type={usernameRef} placeholder="Username" />
            <input ref={emailRef} placeholder="Email" />
            <input ref={passwordRef} type="password" placeholder="Password" />
            <input type={dobRef} placeholder="Date of Birth" />
          </div>

          <button disabled={loading} onClick={handleSignup} className="btnnn">
            Sign Up
          </button>
          <button disabled={loading} onClick={handleLogin} className="btnnn">
            Log In
          </button>
        </>
      )}

      {currentUser && (
        <>
          <Profile />
          <button disabled={loading || !currentUser} onClick={handleLogout}>
            Log Out
          </button>
        </>
      )}
    </div>
    </div>
  );
}
