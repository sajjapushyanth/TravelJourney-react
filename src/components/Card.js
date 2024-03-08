import React from "react";
// import Location from ".../public/images/Location.png";



export default function card(props){

    let imgsrc =  `${props.item.imageUrl}`
    
    return(
        <div className="card">
            <div className="img"> 
                
                <img  src={`../images/${props.item.imageUrl}`}  alt="place-image"  className="mountain"/>
              
            </div>

            <div className="text-container">
                <div className="location">
                    
                    <img src="/images/Location.png" alt="location" className="location-logo"/>
                    <h3 className="location-name">{props.item.location}</h3>
                    
                    
                    <a href={props.item.googleMapsUrl} className="location-text">View On Google Maps</a>
                </div>
                <h1 className="place"> {props.item.title}</h1>
                <h3 className="date">{props.item.startDate} - {props.item.endDate}</h3>
                <p className="place-text">{props.item.description}</p>
                

             </div>
             
            </div>
            
            
    )
}