import React from "react";
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"

export default function App() {

  const travelData=data.map(item=>{
    return(
      <Card 
        key={item.id}
        item={item}
      />
    )
  })
  
  return (
    <div>
    <Navbar />
    {travelData}
    
    </div>
  );
}


