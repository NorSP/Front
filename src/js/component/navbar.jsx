import React,{useContext, useState, useEffect} from "react";
import {Link} from "react-router-dom";
import log from "../../img/star.png";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Navbar = () => {
    let {store, actions}= useContext(Context)
    const [visibilityButtonFavorite, setButtonFavorite] = useState("hidden")
    const [visibilityButtonLogin, setVisibilityLogin] = useState ("show")

    useEffect(()=>{
        
        if(store.auth === true){
            setButtonFavorite("show")
            setVisibilityLogin("hidden")
        }else{
            setButtonFavorite("hidden")
            setVisibilityLogin("show")
        }
        
    },[store.auth])

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
        
        <Link to ="/login" className={visibilityButtonLogin}>
        <button className="btn btn-primary me-3">Login</button>
        
        </Link >
        <div className={visibilityButtonFavorite}>
        <Link to ="" className=" nav-item dropdown ">
        <button className="btn btn-primary nav-link dropdown-toggle text-light" data-bs-toggle="dropdown" aria-expanded="false" > Favorites</button>
        <ul className="dropdown-menu">{screenList}</ul> 

        <button onClick={()=>actions.logOut()} className="btn border-info btn-secondary mx-2"> Log Out</button>

        
        </Link >
        </div> 
        </div> </nav >
    );
};