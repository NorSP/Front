import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const Profile = () => {
    let {store}= useContext(Context)
    console.log(store?.profile);

    return (
        
        <>
        <h1>hola</h1>
        </>

    )

}