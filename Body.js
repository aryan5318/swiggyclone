import { useState, useEffect } from "react"
import { restaurants } from "./resturant.js"
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import Menu from "./Restaurantmenu.js";



function Filterdata(SearchInput, AllRestaurant) {
  const fdata = AllRestaurant.filter((x) =>
    x.info.name.toLowerCase().includes(SearchInput.toLowerCase()));
  return fdata;
}

const ResturantCard = ({ cloudinaryImageId, avgRating, name, cuisines, }) => (
  <div className="card">
    <div className="image-container">
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}></img>
    </div>
    <div className="text-deco">
      <h2>{name}</h2>
      <h4>{avgRating} stars</h4>
      <p>{cuisines}</p>

    </div>
  </div>
)
const CrouselCard = ({ imageId }) => {
  return (
    <>
      <img className="Crousel" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + imageId}></img>
    </>

  )
}
const Body = () => {
  const [AllRestaurant, SetAllRestaurant] = useState([]);
  const [FilterRestaurant, SetFilterRestaurant] = useState([]);
  const [SearchInput, setSearchInput] = useState("");
  const [Crousel, SetCrousel] = useState();
  console.log(FilterRestaurant)


  useEffect(() => {
    getRestaurant();
  }, []);




  async function getRestaurant() {

    console.log("first");


    const data = await fetch(
     "  https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.1997451&lng=79.9099173&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);

    SetAllRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    SetFilterRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    SetCrousel(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle.info);

  }




  return (FilterRestaurant.length == 0) ? <Shimmer/> : (
    <>

      <div className="bodystyle">

        <div className="search-container">
          <input type="text"
            className="input-box"
            placeholder="search"
            value={SearchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }
            }>
          </input>
          <button className="button" onClick={() => {
            const data = Filterdata(SearchInput, AllRestaurant);
            SetFilterRestaurant(data);
          }}

          >search </button>
        </div>
        <div className="crouselcard">
          {Crousel.map((item) => <CrouselCard {...item} key={item.id} />
          )}

        </div>
        <div className="Body">


          {FilterRestaurant.map((hotel) => {
            return <Link key={hotel.info.id} to={"/menu/" + hotel.info.id}> <ResturantCard  {...hotel.info} />;
            </Link>

          }
          )
          }



        </div>
      </div>

    </>
  )
}
export default Body;