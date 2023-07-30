import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about1.jpg"
import "./about.css"
import { Link } from "react-router-dom"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

            <p>Welcome to our real estate website! We are a team of dedicated professionals who are passionate about helping our clients buy and sell properties in [insert location]. 
            Our mission is to provide exceptional service to our clients and make the buying and selling process as seamless and stress-free as possible.</p>
            <Link to="/Aboutt">
              <button className='btn2'>More About Us</button>
              </Link>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
