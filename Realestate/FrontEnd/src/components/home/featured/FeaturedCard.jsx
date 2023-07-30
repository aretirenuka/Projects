import React, { useState } from "react"
import { featured } from "../../data/Data"
import axios from "axios"
import { useEffect,useContext } from "react"
import { Link } from "react-router-dom"
import AppContext from "../../AppContext"
const FeaturedCard = () => {
  const [typee,settype]=useState("")
  const [houses, sethouses] = useState([]);
  const myContext=useContext(AppContext)
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
      <div className='content grid5 mtop'>
          <div className='boxx' onClick={(e)=>settype("Family")}>
            <img className="imagee" src= "../images/hero/h1.png" alt='' />
            <h4>Family Houses</h4>
            <label>Properties</label>
            
          </div>
          <div className='boxx' onClick={(e)=>settype("Villas")}>
            <img className="imagee" src= "../images/hero/h6.png" alt='' />
            <h4>Villas</h4>
            <label>Properties</label>
          </div>
          <div className='boxx' onClick={(e)=>settype("Apartments")} >
            <img className="imagee" src= "../images/hero/h3.png" alt='' />
            <h4>Apartments</h4>
            <label>Properties</label>
          </div>
          <div className='boxx' onClick={(e)=>settype("Offices")}>
            <img className="imagee" src= "../images/hero/h4.png" alt='' />
            <h4>Offices</h4>
            <label>Properties</label>
          </div>
          <div className='boxx' onClick={(e)=>settype("Duplexes")}>
            <img className="imagee" src= "../images/hero/h6.png" alt='' />
            <h4>Duplexes</h4>
            <label>Properties</label>
          </div>
      </div>
      <div className='content grid3 mtop'>
        {houses.map((val, index) => {
          const { type, address, price,rating,_id,filee  } = val
          if(typee===type){
          return (
            <div className='boxshadoww' key={index}>
              <div className='imggg'>
                <img src={filee} alt='' />
              </div>
              <div className='text'>
                <div className='category flex'>
                  <i style={{marginLeft:260,color:"black"}}>${price}</i>
                </div>
                <h4 className="star2">{rating}<i class="fa-solid fa-star" style={{color:"#4D65A4"}}></i></h4>
                <p className="star1">
                  <i className='fa fa-location-dot'></i> {address} 
                </p>
              </div>
              <div className='button flex'>
                
                <Link to="/Detail">
                  <button className='starr' onClick={()=>myContext.getid(_id)}>View More</button> 
                  </Link>
                
                <span className="type1">{type}</span>
              </div>

            </div>
          )
        }})}
      </div>
    </>
  )
}

export default FeaturedCard
