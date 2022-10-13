import React,{useContext} from "react";
import {Link} from "react-router-dom";
import log from "../../img/star.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
    let {store, action}= useContext(Context)

    const screenList= store?.favorites.map((item)=>{
        return(

        <div key={item}>
            <li className="text-info ms-3 my-1">{item}</li>
        </div>)

    });


    return (< nav className = "navbar navbar-light bg-dark p-3" >
        <Link to = "/" >
        <img className = ""src = {log} style={{maxWidth:"100px", maxHeigth:"100px"}}/></Link>
        <div className = "ml-auto">
        <Link to ="" className="nav-item dropdown">
        <button className="btn btn-primary nav-link dropdown-toggle text-light" data-bs-toggle="dropdown" aria-expanded="false" > Favorites</button>
        <ul className="dropdown-menu">{screenList}</ul> 
        </Link > 
        </div> </nav >
    );
};