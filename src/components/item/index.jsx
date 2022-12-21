 import React from "react";
 
 const Item =({title}) =>{
    return(
        <div className="card" style={{width:'18rem'}}>
  <img src="https://placedog.net/500" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    )
 }

 export default Item