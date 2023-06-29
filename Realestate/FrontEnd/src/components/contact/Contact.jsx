import React from "react"
import img from "../images/pricing.jpg"
import Back from "../common/Back"
import "./contact.css"
import { useState } from "react"
import axios from "axios"

const Contact = () => {
  const [name,setname]=useState("")
  const [mail,setmail]=useState("")
  const [subject,setsubject]=useState("")
  const [number,setnumber]=useState("")
  const [query,setquery]=useState("")
  async function submit(e){
    e.preventDefault();
    let contactt = {
      "name":name,
      "mail":mail,
      "subject":subject,
      "number":number,
      "query":query
    }
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({contactt})
  };
  axios.post('http://localhost:4000/postcontact', {contactt})
  .then(response => {
   window.location.href='/contactres';
  })
}
  return (
    <>
      <section className='contact mb' >
        <Back name='Contact Us' title='Get Help & Friendly Support from Us' cover={img} />
        <div className='container' id="contacttt">
          <form className='shadow' action="POST">
            <h4>Fill Up The Form</h4> <br />
            <div>
              <input type='text' placeholder='Name' onChange={(e)=>{setname(e.target.value)}} />
              <input type='text' placeholder='Email' onChange={(e)=>{setmail(e.target.value)}}/>
            </div>
            <input type='text' placeholder='Subject' onChange={(e)=>{setsubject(e.target.value)}} />
            <div >
              <label for="phone">Enter your phone number:</label>
            </div>
            <input type="number" maxLength={10} minLength={10} onChange={(e)=>{setnumber(e.target.value)}}></input>
            <textarea cols='30' rows='10' onChange={(e)=>{setquery(e.target.value)}} placeholder="Enter your query"></textarea>
            <button onClick={submit}>Submit Request</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact