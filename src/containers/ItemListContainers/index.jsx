import React from "react";
import CartWidget from "../../components/CartWidget";
import Item from "../../components/item";
import './style.scss'
const ItemListContainer =() =>{
    return(
 <div className="ItemListContainer">
    <Item title={"titulo 1"}/>
    <Item title={"titulo 2"}/>
    <Item title={"titulo 3"}/>
    <Item title={"titulo 4"}/>
    <Item title={"titulo 5"}/>
 </div>
    )
}

export default ItemListContainer