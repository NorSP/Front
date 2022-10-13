import React, {
    useEffect,
    useState,
    useContext
} from "react";
import {Link, useParams} from "react-router-dom";
import { Context } from "../store/appContext";



export const DetallesPlanetas = () => {

    const {
        store,
        actions
    } = useContext(Context);
    const params = useParams()
    const [next, setNext]=useState("")
    const [down, setDown]=useState("")
    const [apiImgData, setapiImgData] = useState("text-light")

    // let apiImg = (sLink)=>{
    //     fetch("https://starwars-visualguide.com/assets/img/characters"+ sLink +".jpg")
    //     .then((response)=>response)
    //     .then((data)=>setapiImgData(data))
    //   }

    useEffect(() => {

        actions.apiPlanetsId(params.theid)
        //apiImg(params.theid)
        setDown(String(Number(params.theid)-1))
        setNext(String(Number(params.theid)+1))


    }, [params.theid])



    return ( 
    <>

    <div className ="container">
        <hr/>
        < div className = "d-flex container" >
        < img src={`https://starwars-visualguide.com/assets/img/planets/${params.theid}.jpg`}
        className = ""
        style = {
            {
                maxHeight: "350px",
                maxWidth: "500px"
            }
        }
        />

        < div className = "d-flex flex-column align-items-center"
        style = {
            {
                width: "100%"
            }
        } >
        <h2 className = "text-white"> {store.apiDataPlanetsId?.properties?.name} 
        </h2> <p className = "text-dark" > {store.apiDataPlanetsId?.description}</p> 
        </div> 
        </div> 
        <hr />

        <div className = "container text-center text-dark" >
        <div className = "row" >
        <div className = "col" >
        Diameter
        </div> 
        <div className = "col" >
        Rotation Period
        </div> 
        <div className = "col" >
        Orbital Period
        </div> 
        <div className = "col" >
        Gravity
        </div>

        <div className = "col" >
        Population
        </div> 
        <div className = "col" >
        Climate
        </div> 
        </div> 
        </div>

        <hr/>

        <div className = "container text-center text-white" >
        <div className = "row" >
        <div className = "col" >
        {store.apiDataPlanetsId?.properties?.diameter}
        </div> 
        <div className = "col" >
        {store.apiDataPlanetsId?.properties?.rotation_period}
        </div> 
        <div className = "col" >
        {store.apiDataPlanetsId?.properties?.orbital_period}
        </div> 
        <div className = "col" >
        {store.apiDataPlanetsId?.properties?.gravity}
        </div> 
        <div className = "col" >
        {store.apiDataPlanetsId?.properties?.population}
        </div> 
        <div className = "col" >
        {store.apiDataPlanetsId?.properties?.climate} 
        </div> 
        </div>
         </div>

        <
        br / >
        <
        br / >
        <
        br / >




        </div>  
        </>




    );
};