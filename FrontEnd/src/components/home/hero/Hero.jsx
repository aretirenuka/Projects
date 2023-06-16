import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"
import Child from './Child'
import {useState , useEffect} from 'react';
import axios from "axios"
import About from "../../about/About";
import { Link } from "react-router-dom";

const Hero = () => {
//   const [type, settype] = useState("");
//   const [ps1, setPassword] = useState("");
//  const [houses, sethouses] = useState([]);
//   const [house,sethouse]=useState("")
//   const handletype=(e)=>{
//     settype(e.target.value)
    
//   }
  
  
//     useEffect(()=>{
//       axios.get("http://localhost:4000/gethouses")
//       .then((res)=>{
//         sethouses(res.data)
//       // console.log(res.data)
//     }
//       )
      
//     },[]) 
  


// const handlehouses=(e)=>{
//   console.log("In handlehouses")
//   e.preventDefault();
//   const housee=houses.filter((ele)=>{
//     if(ele.type==type){
//       return ele;
//     }
//   })
  
//   sethouse(housee)
//   alert(JSON.stringify(housee))
  

//   window.location.href='/Child'
// }
// alert(houses)

  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='Search Your Next Home ' subtitle='Find new & featured property located in your local city.' />

          {/* <form className='flex' onSubmit={handlehouses}>
            
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
              <select>
              <option>Price Range</option>
  <option value="2000">2000-4000$</option>
  <option value="4000">4000-6000$</option>
  <option value="6000">6000-8000$</option>
  <option value="8000">8000-10000$</option>
  <option value="10000">10000$ and above</option>
</select>
            </div>
           
            <button className='btn1' type="submit">click
              <i className='fa fa-search'></i>
            </button>
          </form>           */}
          <Link to="/Child">
            <button className="btn21">Search your House<i className='fa fa-search' id="searchh"></i></button>
          </Link>
        </div>
      </section>
      
     
    </>
  )
}
export default Hero

{/* // import React from "react"
// import Heading from "../../common/Heading"
// import "./hero.css"
// // import RecentCard from "../recent/RecentCard"
// import {useState , useEffect} from 'react';
// import axios from "axios"
// const Hero = () => { */}


{/* //   const [houses,sethouses]=useState()
// useEffect(()=>{ */}
{/* //   axios.get('http://localhost:4000/getData')
//   .then((res)=>{sethouses(res.data)
//   console.log(res.data)})
  
// })  

//   return (
//     <>
//       <section className='hero'>
//         <div className='container'>
//           <Heading title='Search Your Next Home' subtitle='Find new & featured property located in your local city.' />
//           <form className='flex'>

//             {/* <div className='box'>
//               <span>Property Type</span><br /> */}
//               {/* <select>
//               {
//                 houses.map((item,index)=>{
//                   return(
//                   <option value="Offices">{item.name}</option>
//                   )
//                 })
//                 }
//             </select>
//             </div> */}

//             {/* <div className='box'>
//               <span>Price Range</span><br />
//               <select>
//               {
//                 houses.map((item,index)=>{

//                   return(
//                   <option value="Offices">{item.type  }</option>
//                   )
//                 })
//                 }
//               </select>
          
//             </div> */}
//             {/* <div className='box'>
//               <h4>Advance Filter</h4>
//             </div> */}
//             <button className='btn1'>
//               <i className='fa fa-search'></i>
//             </button>
//           </form>
//         </div>
//       </section>
//     </>
//   )
// }

// export default Hero */}