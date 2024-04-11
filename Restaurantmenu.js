import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
const Menu = ()=>{
  const {resID}=useParams();
  console.log(resID);
    const [RestaurantMenu,SetRestaurantMenu]=useState(null);
    useEffect(()=>{
        getRestaurant();
      },[])
      async function getRestaurant(){
       const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.1997451&lng=79.9099173&restaurantId="+resID+"&catalog_qa=undefined&submitAction=ENTER");
       
       const json =  await data.json();
       console.log(json);
       SetRestaurantMenu(json);
       
      }
      return !RestaurantMenu?(<Shimmer/>):(  
      <>
      <div >
       <h2>{RestaurantMenu.data?.cards[0]?.card?.card?.info?.name}</h2>
        
       <h2>{RestaurantMenu.data?.cards[0]?.card?.card?.info?.city}</h2>
       </div>
      
    <div >  
       <h1 className="menuy">Restaurant Menu</h1>
   
<ul className="menur">
  
  { 

RestaurantMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?. 
REGULAR?.cards?.map((item)=>item.card?.card?.itemCards?.map((item)=> <li className="menus" key={item?.card?.info?.id}>{item?.card?.info?.name } {item?.card?.info.imageId && <img className="food" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item?.card?.info?.imageId}`} alt={item?.card?.info.name} />}</li>  ))

 } </ul>  
  
  </div> 



       
      
        
    
      </>)
}
export default Menu;