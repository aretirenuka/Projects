import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about1.jpg"
import "../about/about.css"
import { Link } from "react-router-dom"

const Contactres = () => {
  return (
    <>
      <section className='about'>
        <Back name='We Listened' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Thanks for Contacting Us' subtitle='Check out our company story and work process' />

            <p>We have received your Details and query</p>
            <p>Thank you for letting us know</p>
            <p>We will reach you soon</p>
            <Link to="/">
              <button className='btn2'>Back to Home</button>
              </Link>
          </div>
          {/* <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div> */}
        </div>
      </section>
    </>
  )
}

export default Contactres
