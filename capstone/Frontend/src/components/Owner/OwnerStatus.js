import React from 'react';
import './OwnSta.css';
import OwnerNav from './OwnerNav';
import img1 from './OwnSta.jpeg'
function OwnerStatus()
{
    return(
        
        <>
        <OwnerNav/>
        <center>
            <h4>My Car Status</h4>
            <form>
                <label>
                Licensce No:
                    <input type="text" placeholder="Enter Licence No .." id="inpt" />
                </label>
                <br></br>
                <br></br>
                <button type='button' id='btn'>Submit</button>
            </form>
            <br></br>
            <hr></hr>           
            <br></br> 
            <br></br>
            <div classname='ta'>
                <div id='a'>
                    Car Model:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Booking Date:
                </div>
                <br></br>
                <br></br>
                <div id='b'>
                    User License:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;End Date:
                </div>
                <br></br>
                <br></br>
                <div id='c'>
                    User Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Amount Paid:
                </div>
                <br></br>
                <br></br>
                
                <div id='d'>
                    Car Color :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                
            </div>
        
        
            
        <div>            
            <img src={img1} width='240' height='155' alt='reload'/>           
        </div>

        </center>    
        </>    
        

    );
}
export default OwnerStatus;