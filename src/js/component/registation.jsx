import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const Registation = () => {

    const [email, setEmail] = useState("");
    
    const [userName, setUsername] = useState("");
    
    const [newPassword, setNewPassword] = useState("");
    const {actions, store} = useContext(Context)
    const history = useHistory();
  
    const handleSubmit = (e)=>{
      e.preventDefault()
    //  let onLogged = actions.login(check,newPassword);
    //   setCheck("")
    //   setNewPassword("")
    //   onLogged ? history.push("/") : null;
  
  
    }
  
  
    const Submit = ()=>{
      actions.signUp(userName, email, newPassword)
       
  
    setEmail("")
    setNewPassword("")
    setUsername("")
     
  
    }
  
  
  
    return (
      <div className="text-center mt-5 container">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Username
          </label>
          <input
            type="username"
            className="form-control"
            id="exampleInputUser1"
            aria-describedby="userHelp"
            onChange={(e) => setUsername(e.target.value)}
            value={userName}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputCheck1" className="form-label">
              Email
            </label>
            <input
              type="check"
              className="form-control"
              id="exampleInputCheck1"
              aria-describedby="checkHelp"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <div id="checkHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputNewPassword1" className="form-label">
              New Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputNewPassword1"
              onChange={(e) => setNewPassword(e.target.value)}
              value={newPassword}
              
              
              />
          </div>
          <button className="btn btn-primary" onClick={Submit}>
            Submit
          </button>
        </div>
      </div>
    );
}