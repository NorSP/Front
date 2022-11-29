import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory, Link } from "react-router-dom";




export const Login = () => {
  //definimos los estados
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUsername] = useState("");
  const {actions, store} = useContext(Context);
  const history = useHistory();

  const handleSubmit = (e)=>{
    e.preventDefault()
  //  let onLogged = actions.login(email,password);n
  //   setEmail("")
  //   setPassword("")
    // onLogged ? history.push("/") : null;


  }


  const Submit = ()=>{
    actions.login(email, password, userName)
     setTimeout (()=>{
      if (store.auth === true){
      
      history.push("/");

  
    }
  }, 1000)

  setEmail("")
  setPassword("")
 

  }



  return (
    <div className="text-center mt-5 container">
      <div onSubmit={handleSubmit}>
      
        
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            
            
            />
        </div>
        <button className="btn btn-primary" onClick={Submit}>
          Submit
        </button>
        <Link to ="/registation">Registrarse</Link>
      </div>
    </div>
  );
};
