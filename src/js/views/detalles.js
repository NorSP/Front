import React, {useEffect,useState,useContext} from "react";
import {Link, useParams} from "react-router-dom";
import { Context } from "../store/appContext";


export const Detalles = () => {

    const {store,actions} = useContext(Context);
    const params = useParams()
    const [next, setNext]=useState("")
    const [down, setDown]=useState("")
    const [apiImgData, setapiImgData] = useState("")

    console.log(params);
   
    // let apiImg = (sLink)=>{
    //     fetch("https://starwars-visualguide.com/assets/img/characters/"+ sLink +".jpg")
    //     .then((response)=>response)
    //     .then((data)=>setapiImgData(data))
    //   }

    
      useEffect(() => {
        actions.apiPeopleId(params.theid)
        //apiImg(params.theid)
        setDown(String(Number(params.theid)-1))
        setNext(String(Number(params.theid)+1))

        //setLikeFavorite("text-primary")

    }, [params.theid])


    return ( 
    <>

        <div className="container">
        <hr/>
        <div className="d-flex container">
        <img src={`https://starwars-visualguide.com/assets/img/characters/${params.theid}.jpg`} style={{maxHeight: "350px",maxWidth: "500px"}}/>

        <div className="d-flex flex-column align-items-center"style = {{width: "100%"}} >
            
        <h2 className="text-white" > {store.apiDataPeopleId?.properties?.name} 
            </h2> 
            <p className="text-dark" > {store.apiDataPeopleId?.description}</p> 
        <hr/>
        </div> 
        </div> 

       <hr/>

        <div className="container text-center text-dark">
        <div className="row">
        <div className="col">Name</div> 
         <div className="col">Birth Year </div> 
         <div className="col" >Gender</div> 
        <div className="col">Height </div>

        <div className="col">Skin Color </div>
         <div className="col">Eye Color </div> 
        </div> 
        
        </div>

        <hr/>

        <div className="container text-center text-white" >
        <div className="row">
        <div className="col"> {store.apiDataPeopleId?.properties?.name}</div> 
         <div className="col">{store.apiDataPeopleId?.properties?.birth_year} </div> 
        <div className="col">{store.apiDataPeopleId?.properties?.gender}</div> 
         <div className="col">{store.apiDataPeopleId?.properties?.height} </div> 
        <div className="col">{store.apiDataPeopleId?.properties?.skin_color}</div> 
         
         <div className="col">{store.apiDataPeopleId?.properties?.hair_color}</div> 
         </div> 
         </div>
        <br/>
        <br/>
        <br/>
        </div>  
        </>

    );
};