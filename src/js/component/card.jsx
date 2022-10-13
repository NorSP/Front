import React, {useState, useEffect,useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Card = (props) => {
  let {store, actions} = useContext(Context)
  const [apiImgData, setapiImgData] = useState("text-light")
  

  const [likeFavorite, setlikeFavorite] = useState()
  const [subDominio, setSubDominio] = useState()

  let apiImg = (pLink, sLink)=>{
      fetch("https://starwars-visualguide.com/assets/img/"+ pLink +"/"+ sLink +".jpg")
      .then((response)=>response)
      .then((data)=>setapiImgData(data))
    }

  const pressLike = () =>{
      if(likeFavorite === "text-light"){
        setlikeFavorite("text-dark")
      } else{
        setlikeFavorite("text-light")
      }

    }

    useEffect(()=>{
    
      if(props.title == "People"){

        setSubDominio("/people")
          apiImg("characters", props.uid)
          console.log("estoy en persona");

      } else if(props.title == "Planets"){

        setSubDominio("/planets")
          apiImg("planets", props.uid)
          console.log("estoy en planeta");

      }else if(props.title == "Vehicles"){

        setSubDominio("/vehicles")
          apiImg("vehicles", props.uid)
          console.log("estoy en vehicles");

  }}, [])
	

	 return (
    
   <div className=" mx-4"style={{width:"18rem"}}>
  <img src={apiImgData?.url} style={{width:"18rem"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">Parrafo</p>
    
    <div className="d-flex justify-content-between">
    
    <Link to={subDominio+"/detalles/"+props.uid}>
        
        <button className = "btn btn-primary" > Learn more! </button> 
    </Link>

    <Link to ="">
        <button onClick={()=>actions.FunFavorites(props.name)} className = "btn btn-warning"> 
        <i className={"fa fa-heart " +likeFavorite}/>

        </button> 
        
        </Link >

     </div>
    </div>
       </div>
		
	)
};
