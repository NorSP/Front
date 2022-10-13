import React from "react";

import { Card } from "../component/card.jsx";


export const BodyComponent = (props) => {


    const map_obj = props.obj.map((item, index)=>{
        return <Card key={index} name={item.name} uid={item.uid} title={props.title} />
    })
	

	return (
        <>
        <div>

        <h2>{props.title}</h2>
		
        <pre className="d-flex mx-4 chroma">
        
        {map_obj}

			
		</pre>
        </div>
        </>
	);
};