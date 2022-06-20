import React, { useState } from 'react'


export default function Form() {
  const [myName,setMyName] = useState("");
  const [favLanguage,setFavLanguage] = useState("");
  const [favFoods,setFavFoods] = useState("");
  const [bike,setBike] = useState([]);


  const handaleChecked = ({target}) => {

    setBike(
    bike.includes(target.value) ? bike.filter((value) => value !== target.value) : [...bike, target.value]
    )
  }

  

 
 


  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      console.log("submit",myName,favLanguage,favFoods,bike)
      
      

    }}>
      
       <br />
      <label htmlFor="myName">Name</label>
      <input 
      id='myName' 
      type="text"
      value={myName}
      onChange={(e) => setMyName(e.target.value)}
      required 
      />
      
      <h4>Choose your favorite web language</h4>
      <input 
      type="radio" 
      id="html" 
      name="fav_language"
      value={"html"}
      onChange={(e) => setFavLanguage(e.target.value)}
      />
      <label htmlFor="html">Html</label><br />
      <input 
      type="radio" 
      id='css'
      name="fav_language"
      value={"css"}
      onChange={(e) => setFavLanguage(e.target.value)}
      />
      <label htmlFor="css">Css</label><br />
      <input 
      type="radio" 
      id='javascrip' 
      name="fav_language"
      value={"javascrip"}
      onChange={(e) => setFavLanguage(e.target.value)}
      />
      <label htmlFor="javascrip">Javascrip</label>

      <h4>Choose your favorite foods</h4>
      <input 
      type="radio" 
      id='cal' 
      name="fav_foods"
      value={"cal"}
      onChange={(e) => setFavFoods(e.target.value)}
      />
      <label htmlFor="cal">cal</label><br />
      <input 
      type="radio"
      id='dal' 
      name="fav_foods"
      value={"dal"}
      
      onChange={(e) => setFavFoods(e.target.value)}
      />
      <label htmlFor="dal">Dal</label>

      <h4>checkboxs</h4>
      <input 
      type="checkbox" 
      id='bike' 
      name="vehicle1"
      value='bike'
      onChange={handaleChecked}
      />
      <label htmlFor="bike">I have a bike</label><br />
      <input 
      type="checkbox" 
      id='car' 
      name="vehicle2"
      value='car'
      onChange={handaleChecked}
      />
      <label htmlFor="car">I have a car</label><br />
      <input 
      type="checkbox" 
      id='boat' 
      name="vehicle3"
      value='boat'
      onChange={handaleChecked}
      />
      <label htmlFor="boat">I have a boat</label>
      <br />
      <br />
      <button>submit</button>

    </form>
     


    
  )
}


