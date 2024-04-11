/*
HMR-Hot Module Replacement;
File watcher algoritm;
BUNDLING;
Cleaning our code;
Dev abd Production build;
Super fast build algoritm;
Image optimization;
caching while devlopment;



Transitive dependenies

*/





// const heading = document.createElement("h1");
// heading.innerHTML= "Namaste everyone from javascript.";
// const root = document.getElementById("root");
//  root.appendChild(heading);


//const heading = React.createElement("h1",{},"Namaste everyone from React");
//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);
//const heading1 = React.createElement("h1",{
/*  id:"title",
},
"Heading1 from parcel " );
const heading2 = React.createElement("h2",{
  id:"title",
},
"Heading2" );
const container = React.createElement("div",{
  id:"container",
},
[heading1,heading2] );*/
import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Body from "./components/Body.js";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Menu from "./components/Restaurantmenu.js";
import Location from "./components/Location.js";
function Layout() {
  return (
    <>
    
      <Navbar />
      <Outlet/>
      
      
    </>
  )
}
const router = createBrowserRouter([
  {  path:"/",
  element: (<Layout/>),
 
    
    children:[  
      {path:"/",
      element:(<Body/>)

      },
      {
        path:"About",
        element:(<About/>)
      },
     
      {
        path:"contact",
        element:(<Contact/>)
       },
       {
        path:"/menu/:resID",
        element:(<Menu/>)
       },
      {
        path:"Location",
        element:(<Location/>)
      }

      ]
  
  }
  

])



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <RouterProvider router={router} />);


