import React, { useCallback } from "react"
import {useState , useEffect} from 'react';
import './price.css'
import axios from "axios";
import RecentCard from "../recent/RecentCard";

const PriceCard = () => {
  const [name,setname]=useState("")
  const [mail,setmail]=useState("")
  const [price,setprice]=useState("")
  const [rating,setrating]=useState("")
  const [rooms,setrooms]=useState("")
  const [area,setarea]=useState("")
  const [age,setage]=useState("")
  const [address,setaddress]=useState("")
  const [type,settype]=useState("")
  const [filee, setFile] = useState("");
  const handleImageUpload = (e) => {
    const urll = e.target.value;
    var ur="https://drive.google.com/uc?export=view&id=";
    for(var i=0; i<urll.length-3; i++){
            if(urll.charAt(i)=='/' && urll.charAt(i+1)=='d' && urll.charAt(i+2)=='/'){
              var j=i+3;
              while(urll.charAt(j)!='/'){
                ur+=""+urll.charAt(j);
                j++;
               
              }
              if(urll.charAt(i=='/')){
                break;
              }
             
            }
    }
    setFile(ur);
   
    
  };
  
    // setPicture({
    //   /* contains the preview, if you want to show the picture to the user
    //        you can access it with this.state.currentPicture
    //    */
    //   picturePreview: URL.createObjectURL(e.target.files[0]),
    //   /* this contains the file we want to send */
    //   pictureAsFile: e.target.files[0],
    // });
 
  async function submit(e){
    e.preventDefault();
    let selldetails={
      "name":name,
      "mail":mail,
      "price":price,
      "rating":rating,
      "rooms":rooms,
      "area":area,
      "age":age,
      "address":address,
      "type":type,
       "filee":filee
    }
    
   
    console.log("in postsell")
    const requestOptions = {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({selldetails})
  };
  axios.post('http://localhost:4000/postsell', {selldetails})
      .then(response => {
       window.location.href='/';
      })
  }
  return (
    <>
      <div className='container'>
          <form className='shadoww' action='POST'>
            <h4>Want to sell Home?</h4> <br />
            <div>
              <input type='text' placeholder='Name' onChange={(e)=>{setname(e.target.value)}}   />
              <input type='text' placeholder='Email' onChange={(e)=>{setmail(e.target.value)}}/>
            </div>
            <div>
            <input type="text" placeholder="Your selling price" onChange={(e)=>{setprice(e.target.value)}} ></input><br />
            <input type="text" placeholder="Rating" onChange={(e)=>{setrating(e.target.value)}}></input><br />
            </div>
            <div>
            <input type="text" placeholder="No of Rooms" onChange={(e)=>{setrooms(e.target.value)}}></input><br />
            <input type="text" placeholder="Area in sqft" onChange={(e)=>{setarea(e.target.value)}}></input><br />
            </div>
            <div>
            <input type="text" placeholder="Age of the house" onChange={(e)=>{setage(e.target.value)}}></input><br />
            </div>
            <input type="text" placeholder="Enter the link of the Picture" onChange={handleImageUpload} />
            <textarea rows="4" cols="90" placeholder="Address" className="textareaa" onChange={(e)=>{setaddress(e.target.value)}}></textarea>
            
            <div>
            <select className="selectt" onChange={(e)=>{settype(e.target.value)}}>
        <option >Select type of house</option>
        <option value="Villas">Villas</option>
        <option value="Family">Family Houses</option>
        <option value="Apartments">Apartments</option>
        <option value="Offices">Offices</option>
        <option value="Duplexes">Duplexes</option>
      </select><br />
            </div>
            
            <button className="selll_button" onClick={submit}>Sell</button>
          </form>
          
        </div>
    
    </>
  )
}


export default PriceCard