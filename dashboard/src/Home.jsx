import React from "react";
import { BsCart3,BsGrid1X2Fill,BsFillArchiveFill,BsFillGrid3X3GapFill, BsPeopleFill,BsListCheck,
     BsMenuButtonWideFill, BsFillGearFill, 
     BsFillBellFill} from "react-icons/bs";

const Home =()=>{
return(
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div className="main-cards">

       <div className="card">
          <div className="card-inner">
           <h3>Products</h3>
            <BsFillArchiveFill className="card_icon"/>
           </div>
          <h1>300</h1>
        </div>

        <div className="card">
          <div className="card-inner">
           <h3>Categories</h3>
            <BsFillGrid3X3GapFill className="card_icon"/>
           </div>
          <h1>14</h1>
        </div>

        <div className="card">
          <div className="card-inner">
           <h3>Costumers</h3>
            <BsPeopleFill className="card_icon"/>
           </div>
          <h1>37</h1>
        </div>

        <div className="card">
          <div className="card-inner">
           <h3>Alerts</h3>
            <BsFillBellFill className="card_icon"/>
           </div>
          <h1>42</h1>
        </div>

      </div>
    </main>
 )
}

export default Home;
