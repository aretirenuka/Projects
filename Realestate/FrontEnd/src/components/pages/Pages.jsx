import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Pricing from "../pricing/Pricing"
import Blog from "../blog/Blog"
import Services from "../services/Services"
import Contact from "../contact/Contact"
import SignInPage from "../Forms/SignInPage"
import Aboutt from "../about/Aboutt"
import Detail from "../home/recent/Detail"
import LoginPage from "../Forms/LoginPage"
import Child from "../home/hero/Child"
import Contactres from "../contact/contactres"
const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/SignInPage' component={SignInPage} />
          <Route exact path='/Aboutt' component={Aboutt} />
          <Route exact path='/Detail' component={Detail} />
          <Route exact path='/LoginPage' component={LoginPage} />
          <Route exact path='/Child' component={Child} />
          <Route exact path='/Contactres' component={Contactres} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}
export default Pages
