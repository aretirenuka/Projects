import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about2.webp"
import "./about.css"
import { Link } from "react-router-dom"

const Aboutt = () => {
  return (
    <>
      <section className='about'>
        <Back name='Thank you for being intrested in knowing more about us' title="Join Us" cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency' subtitle='Check out our company story and work process' /> 
            <p>Our story began [insert year] when our founder [insert name] recognized a need for a more personalized approach to real estate. 
            With a background in [insert relevant experience], [insert name] set out to build a team of like-minded professionals who shared a commitment to putting clients first.</p>

            <p>Today, our team has grown to include [insert number] agents, all of whom are experts in the local real estate market. 
            We believe in building long-lasting relationships with our clients, and we work hard to earn their trust and respect.</p>
            
            <p>What sets us apart from other real estate agencies is our dedication to [insert unique selling proposition]. 
            Whether you're buying or selling a property, we bring a unique perspective and a wealth of knowledge to every transaction. 
            We understand that every client is unique, and we tailor our approach to meet their individual needs.</p>
            <Link to="/About">
              <button className='btn2'>Back</button>
              </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Aboutt
