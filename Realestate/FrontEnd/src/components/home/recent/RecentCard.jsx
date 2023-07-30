import React from "react"
import { list } from "../../data/Data"
import { Link } from "react-router-dom"
import { useState,useEffect,useContext } from "react";
import axios from "axios";
import './recent.css'
import AppContext from "../../AppContext";
import './recent.css';

const RecentCard = () => {
  const [houses, sethouses] = useState([]);
  const myContext = useContext(AppContext);

  useEffect(()=>{
    axios.get("http://localhost:4000/gethouses")
    .then((res)=>{
      sethouses(res.data)
    
  }
    )
  },[]) 

const handlehouses=(e)=>{
console.log("In handlehouses")
e.preventDefault();
}
  return (
    <>
     <div className='content grid3 mtop'>
        {houses.map((val, index) => {
          const { type, address, price,rating,_id,filee  } = val
          
          return (
            <div className='boxshadowww' key={index}>
              <div className='imggg'>
                <img src={filee} alt='' />
              </div>
              <div className='text'>
                <div className='category flex'>
                  <i style={{marginLeft:200,color:"black"}}>${price}</i>
                </div>
                <h4 className="star">{rating}<i class="fa-solid fa-star" style={{color:"#4D65A4"}}></i></h4>
                <p className="star1">
                  <i className='fa fa-location-dot'></i> {address} 
                </p>
              </div>
              <div className='button flex'>
                <div className="star">
                <Link to="/Detail">
                  <button className='btn2' onClick={()=>myContext.getid(_id)}>View More</button> 
                  </Link>
                </div>
                <span style={{marginRight:"10px"}}>{type}</span>
              </div>

             </div> 
            
          
           
               
          )
        })}
      </div>
    </>
  )
}

export default RecentCard
