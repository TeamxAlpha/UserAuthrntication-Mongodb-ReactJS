import React from "react";
import './comp.css';
import { useLocation } from "react-router-dom";

function Home() {
    const location = useLocation();
    const { id } = location.state || { id: "" }; 
    const { username } = location.state || { username: "" }; 
   
    const dashboardSectionStyles = {
       display: "flex",
       justifyContent: "space-between",
       marginTop: "20px",
    };
   
    const sectionStyles = {
       flex: "1",   
       background: "#FFF",
       padding: "20px",
       borderRadius: "4px",
       boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
    };
   
    return (
       <div className="container">
         <div className="text-center">
           <h1>Welcome {username} to Your Dashboard</h1>
           <p>Logged in as: {id}</p>
         </div>
   
         <div style={dashboardSectionStyles}>
           <div style={sectionStyles}>
             <h2>Dashboard Section 1</h2>
            
           </div>
           <div style={sectionStyles}>
             <h2>Dashboard Section 2</h2>

           </div>
         </div>
       </div>
    );
   
}

export default Home;
