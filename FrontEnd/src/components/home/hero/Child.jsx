import React from "react";
import { houses } from './Hero'
import { useState,useEffect,useContext } from "react";
import axios from "axios";
import {Link} from "react-router-dom"
// import "../../images/logo.jpeg" as pic;
import AppContext from "../../AppContext";
import "./hero.css"
function Child() {
    const [typee, settype] = useState("");
    const [pricee,setprice]=useState("")
  const [ps1, setPassword] = useState("");
 const [houses, sethouses] = useState([]);
  const [house,sethouse]=useState("")
  const myContext = useContext(AppContext);
  const handletype=(e)=>{
    settype(e.target.value)
  }

  const handleprice=(e)=>{
    setprice(e.target.value)
  }
    useEffect(()=>{
      axios.get("http://localhost:4000/gethouses")
      .then((res)=>{
        sethouses(res.data)
      // console.log(res.data)
    }
      )
      
    },[]) 
  


const handlehouses=(e)=>{
  console.log("In handlehouses")
  e.preventDefault();
  const housee=houses.filter((ele)=>{
    if(ele.type==typee){
      return ele;
    }
  })
  
  // sethouse(housee)
//alert(JSON.stringify(housee))
}
// alert(typee)

return (
  <>
    <section className="hero1">
      
      <div className='container'>
          <h1>Search Bar</h1>
        <form className='flex' onSubmit={handlehouses}>
          
          <div className='box'>
            <span>Property Type</span><br />
            
            <select onChange={handletype} >
            <option>Property Type</option>
<option value="Villas">Villas</option>
<option value="Apartments">Apartments</option>
<option value="Duplexes">Duplexes</option>
<option value="Family">Family Houses</option>
<option value="Offices">Offices</option>
</select>

          </div>
          <div className='box'>
            <span>Price Range</span><br />
            <select onChange={handleprice}>
            <option>Price Range</option>
<option value="2000">Below $2000</option>
<option value="4000">Below $4000</option>
<option value="6000">Below $6000</option>
<option value="8000">Below $8000</option>
{/* <option value="10000">Below $10000</option> */}
</select>
          </div>
         
          {/* <button className='btn1' type="submit">
            <i className='fa fa-search'></i>
          </button> */}
        </form>  
        </div>        
    </section>
    <div>
        {
         houses.map((val, index) => {
          const { cover, name, price, type,address,_id,filee } = val
          if(typee===type && price<pricee)
          {
          
          return (
            <>
            <div class="containerr">
  <div class="card" style={{width:"400px",marginTop:"30px"}}>
    <img class="card-img-top" src={filee} alt="Card image" style={{width:"100%",borderRadius:"10px"}} />
    <div class="card-body" style={{boxShadow:"3px smokewhite",marginBottom:"10px"}}>
      <h4 class="card-title"> <i className='fa fa-location-dot'>{address}</i><i style={{marginLeft:"300px"}}>${price}</i> </h4>
      <p class="card-text" style={{marginLeft:"310px"}}></p>
      <Link to="/Detail">
      <button className="starrr" onClick={()=>myContext.getid(_id)}>Know more</button><i style={{marginLeft:"110px"}}>{type}</i>
      </Link>
    </div>
  </div>

 
      </div>
      </>
          )}})}
          </div>
          </>
)}
export default Child;