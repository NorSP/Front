import React, {
    useEffect,
    useState,
    useContext
} from "react";
import {Link, useParams} from "react-router-dom";
import { Context } from "../store/appContext";


export const DetallesVehicles = () => {

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

        actions.apiVehiclesId(params.theid)
       // apiImg(params.theid)
        setDown(String(Number(params.theid)-1))
        setNext(String(Number(params.theid)+1))

    }, [params.theid])



    return ( <>

        <div className = "container" >
        <hr/>
        <div className="d-flex container">
            <img src={`https://starwars-visualguide.com/assets/img/vehicles/${params.theid}.jpg`} style={{maxHeight:"350px", maxWidth:"500px"}} />

            <div className="d-flex flex-column align-items-center" style={{width:"100%"}}>
                <h2 className="text-white">
                    {store.apiDataVehiclesId?.properties?.name}
                </h2>
                <p className="text-dark">{store.apiDataVehiclesId?.description}</p>
            </div>
        </div>
        <hr />

        <div className="container text-center text-dark">
            <div className="row">
                <div className="col">
                    Model
                </div>
                <div className="col">
                Vehicle Class
                </div>
                <div className="col">
                Manufacturer
                </div>
                <div className="col">
                Cost In Credits
                </div>
            
                <div className="col">
                Length
                </div>
                <div className="col">
                Crew
                </div>
            </div>
        </div>

       <hr />

        <div className="container text-center text-white">
            <div className="row">
            <div className="col">
                    {store.apiDataVehiclesId?.properties?.model}
                </div>
                <div className="col">
                {store.apiDataVehiclesId?.properties?.vehicle_class}
                </div>
                <div className="col">
                {store.apiDataVehiclesId?.properties?.manufacturer}
                </div>
                <div className="col">
                {store.apiDataVehiclesId?.properties?.cost_in_credits}
                </div>
                <div className="col">
                {store.apiDataVehiclesId?.properties?.length}
                </div>
                <div className="col">
                {store.apiDataVehiclesId?.properties?.crew}
                </div>
            </div>
        </div>
        
        <br />
        <br />
        <br />




    </div> 
  </>




    );
};