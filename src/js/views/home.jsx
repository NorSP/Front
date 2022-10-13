import React, {useEffect, useState, useContext} from "react";

import "../../styles/home.css";

import {BodyComponent} from "../component/body_component.jsx"
import { Context } from "../store/appContext";


export const Home = () => {
	let {store, actions}= useContext(Context)

	// const [apiDate, setapiDate] = useState()
	// const [apiDatePeople, setapiDatePeople] = useState([])


	// const llamaApi= async () =>{
	// 	try{
	// 		const response = await fetch ("https://www.swapi.tech/api/")
	// 		const data = await response.json()

	// 		setapiDate(data)
			
			

	// 	} catch(err){
	// 		console.log(err)
	// 	}
	// }


	// const consumeApi= async () =>{
	// 	try{
	// 		const response = await fetch (apiDate.result.people)
	// 		const data = await response.json()

	// 		setapiDatePeople(data.results)
			
			

	// 	} catch(err){
	// 		console.log(err)
	// 	}
	// }
	// useEffect (()=>{
	// 	llamaApi()
		
    // },[])

	// console.log(apiDate)
	
	// useEffect (()=>{
	// 	consumeApi()
		
    // },[apiDate])

	// console.log(apiDatePeople)


	return (
		<> 
		<hr />
		<div className="container">
		
	       	
			<BodyComponent title="People" obj={store.apiDataPeople}/>
				<br />

			<BodyComponent title="Planets" obj={store.apiDataPlanets} />
				<br />


			<BodyComponent title="Vehicles" obj={store.apiDataVehicles}/>
				<br />
		
		</div>
		</>
		
			
			
		
	);
};
