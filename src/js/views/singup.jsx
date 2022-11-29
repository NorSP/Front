import React, {useEffect, useState, useContext} from "react";

import "../../styles/home.css";

import {BodyComponent} from "../component/body_component.jsx"
import { Context } from "../store/appContext";
import {Registation} from "../component/registation.jsx"


export const Singup = () => {
    return(
	<div className="text-center mt-5">
		<Registation />

	</div>
)}