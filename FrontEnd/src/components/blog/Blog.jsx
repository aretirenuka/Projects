import React from "react"
import Back from "../common/Back"
import RecentCard from "../home/recent/RecentCard"
import "../home/recent/recent.css"
import img from "../images/about1.jpg"

const Blog = () => {
  return (
    <>
      <section className='blog-out mb'>
        <Back name='Catch Your Dream Home' title='Start your explore' cover={img} />
        <div className='container recent'>
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Blog
