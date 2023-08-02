import React from 'react'
import OwnerNav from './OwnerNav';
import { useNavigate } from 'react-router-dom';
import { AiTwotoneStar } from "react-icons/ai";
function OwnerDashboard() {
  const navigate=useNavigate();
  const carimages=['https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Hyundai-Grand-i10-Nios-200120231541.jpg&w=872&h=578&q=75&c=1',
'https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/128413/scorpio-exterior-right-front-three-quarter-46.jpeg?isig=0&q=75','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAF3nrDoqSzKL2uzA71FNdwXJGxw7vjtG2LA&usqp=CAU',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe6HwzkCUjpqfd0tV_XSTRFqL78Yoa1644rg&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyhiNRVuv7zzxhWfJfJjUAGyaMMapQEtBd7Q&usqp=CAU',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdJyUTal_d5SbEJgzeYbysfMqH8liqgWR-9A&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi7BRoWtw5yCLNZSeqQON52xQ6MlGw7Y9BinDAouHJXkQWUrDNWmWiM2H3dBHcmaykeiQ&usqp=CAU',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbXN9QKETJ4ywu4hBoVymNR3_GB2Q1bCMGzA&usqp=CAU']
const booking=(imgd)=>{
  const card={
    imgadr:imgd
  }
 localStorage.setItem('card',JSON.stringify(card));
 navigate('/ownercar');
}
  return (
    <>
    <OwnerNav/>
    <div className='row' style={{marginTop:'1%'}}>
    <div className='col-md-3 offset-md-4'>
    <h2 style={{textAlign:"center",boxShadow:'3px 3px 2px',borderRadius:'10px'}}><i style={{color:'orange'}}>My</i> <i>Cars</i></h2>
    </div>
   </div>
   <div className='row' style={{marginTop:"1%"}}>
    <div className='col-md-2 offset-md-9'>
    <form>
            <input type="text" placeholder="Search" style={{marginRight:'1%',width:'100%'}} />
      </form>
    </div>
    <div className='col-md-1'> <button  className='btn btn-sm btn-primary' type="submit" style={{marginTop:'1%'}}>Search</button></div>
   </div>
<div className='row'>
  <div className='col-md-4'>
    <img src={carimages[0]} width='100%' height='250vh' alt='reload'/>
    <div style={{marginLeft:'35%'}}>
    <p style={{color:'black',marginLeft:'-7%',marginBottom:'-1%'}}>Grand i10 NIOS</p>
      <p style={{color:'black'}}><AiTwotoneStar color="Gold"/>4.5/5.0</p>
      <button className='btn btn-primary' onClick={()=>{booking(carimages[0])}}>Details</button>
    </div>
  </div>
  <div className='col-md-4'>
    <img src={carimages[1]} width='100%' height='250vh' alt='reload'/>
    <div style={{marginLeft:'35%'}}>
    <p style={{color:'black',marginLeft:'-7%',marginBottom:'-1%'}}>Grand i10 NIOS</p>
      <p style={{color:'black'}}><AiTwotoneStar color="Gold"/>4.5/5.0</p>
      <button className='btn btn-primary' onClick={()=>{booking(carimages[1])}}>Details</button>
    </div>
  </div> <div className='col-md-4'>
    <img src={carimages[2]} width='100%' height='250vh' alt='reload'/>
    <div style={{marginLeft:'35%'}}>
    <p style={{color:'black',marginLeft:'-7%',marginBottom:'-1%'}}>Grand i10 NIOS</p>
      <p style={{color:'black'}}><AiTwotoneStar color="Gold"/>4.5/5.0</p>
      <button className='btn btn-primary'  onClick={()=>{booking(carimages[2])}}>Details</button>
    </div>
  </div> <div className='col-md-4'>
    <img src={carimages[3]} width='100%' height='250vh' alt='reload'/>
    <div style={{marginLeft:'35%'}}>
    <p style={{color:'black',marginLeft:'-7%',marginBottom:'-1%'}}>Grand i10 NIOS</p>
      <p style={{color:'black'}}><AiTwotoneStar color="Gold"/>4.5/5.0</p>
      <button className='btn btn-primary'  onClick={()=>{booking(carimages[3])}}>Details</button>
    </div>
  </div> <div className='col-md-4'>
    <img src={carimages[4]} width='100%' height='250vh' alt='reload'/>
    <div style={{marginLeft:'35%'}}>
    <p style={{color:'black',marginLeft:'-7%',marginBottom:'-1%'}}>Grand i10 NIOS</p>
      <p style={{color:'black'}}><AiTwotoneStar color="Gold"/>4.5/5.0</p>
      <button className='btn btn-primary'  onClick={()=>{booking(carimages[4])}}>Details</button>
    </div>
  </div> <div className='col-md-4'>
    <img src={carimages[5]} width='100%' height='250vh' alt='reload'/>
    <div style={{marginLeft:'35%'}}>
    <p style={{color:'black',marginLeft:'-7%',marginBottom:'-1%'}}>Grand i10 NIOS</p>
      <p style={{color:'black'}}><AiTwotoneStar color="Gold"/>4.5/5.0</p>
      <button className='btn btn-primary'  onClick={()=>{booking(carimages[5])}}>Details</button>
    </div>'
 </div>
</div>
  
    </>
  )
}

export default OwnerDashboard
