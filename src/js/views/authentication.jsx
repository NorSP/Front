import React, {useEffect, useState, useContext} from "react";

import "../../styles/home.css";

import {BodyComponent} from "../component/body_component.jsx"
import { Context } from "../store/appContext";
import {Login} from "../component/login.jsx"


export const Authentication = () => {
    return(
	<div className="text-center mt-5">
		<Login/>
	</div>
)}
