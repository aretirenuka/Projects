import React from "react";
import AppContext from "../../AppContext";
import { useContext,useEffect,useState } from "react";
import axios from "axios";

const Detail=()=>{
    const [houses, sethouses] = useState([]);
  const myContext = useContext(AppContext);

  useEffect(()=>{
    axios.get("http://localhost:4000/gethouses/")
    .then((res)=>{
      sethouses(res.data)
    
  }
    )
  },[]) 

    return(
        <>
    <div>
        {houses.map((val, index) => {
          const { address, price,rating,_id,rooms,area,name,mail,type,age,filee } = val
          if(_id===myContext.id)
          return (
           <div className="details_container">
             <div className="details_content">
              <div className='house_image'>
                  <img src={filee} alt='' />
                </div>
                <div className='leftt'>
                  <div className="left_content">
                    <h2>House Details</h2>
                    <div className='category flex'>
                      <p>Price<b> ${price}</b></p>
                    </div>
                    <p>Rating Available : {rating} <i class="fa-solid fa-star" style={{color:"#4D65A4"}}></i></p>
                    <p>
                    Address: <i className='fa fa-location-dot'></i> {address}
                    </p>
                    <p>Rooms Available: <b>{rooms}</b></p>
                    <p>Area: <b>{area}</b><i>sqft</i></p>
                    <p>Years after construction: <b>{age}</b></p>
                  </div>
                </div>
             </div>
              <div className="downn">
                  <h2>Schedule a call or contact the owner</h2>
                  <div>
                    <p>Mail to: <b>{mail}</b></p>
                    <p>Owner Information: <b>{name}</b></p>
                  </div>
              </div>
            </div>
          )
          })}       
        </div>
        </>
    )
}
export default Detail