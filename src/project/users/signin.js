import * as client from "./client";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function SignIn() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signIn = async () => {
      await client.signin(credentials);
      navigate("/project/account");
  };
  return (
    <div >
      <h2>Sign In</h2>
      <input className="form-control" value={credentials.username} onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} />
      <input className="form-control" value={credentials.password} onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />
      <button onClick={signIn} className="btn btn-primary"> Signin </button>
    </div>
  );
}

export default SignIn;
