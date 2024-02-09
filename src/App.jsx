import {Link, BrowserRouter, Route, Routes }  from "react-router-dom";
import './App.css'
import { Header } from './components/Header';
import { Home } from "./components/Home";
import { Page } from "./components/Page";
import pageImg from './img/icons/circulo-de-flecha.png';
import aboutPageImg from './img/start/about-2021.jpg';
import galleryPageImg from './img/start/gallery-2021.jpg';
import appointmentPageImg from './img/start/appointments-2021.jpg';
import contactPageImg from './img/start/contact-1.jpg';
import { About } from "./components/About";
import { useState } from "react";
import { Gallery } from "./components/Gallery";
import { ContactUs } from "./components/ContactUs";

function App() {
  const [openedMenu, setOpenMenu ] = useState(false)


const aboutPageData = {
  title: "About Us",
  subTitle: "Who We Are",
  downArrow: pageImg,
  bgImg:aboutPageImg
}
const appointmentPageData = {
  title: "Appointment",
  subTitle: "Who We Are",
  downArrow: pageImg,
  bgImg:appointmentPageImg
}
const contactPageData = {
  title: "Contact Us",
  subTitle: "Where We Work",
  downArrow: pageImg,
  bgImg:contactPageImg
}
const galleryPageData = {
  title: "Gallery",
  subTitle: "Check Out Some Photos",
  downArrow: pageImg,
  bgImg:galleryPageImg
}

  return (
    <>
    <Header
      setOpenMenu={setOpenMenu}
      openedMenu={openedMenu}
    />
    <BrowserRouter>
      <header className="headerLinks" id={openedMenu ? "flex" : "none"}>
        <Link className="link" to="/home" onClick={() => {setOpenMenu(false)}}>
          Home
        </Link>
        <Link className="link" to="/aboutUs" onClick={() => {setOpenMenu(false)}}>
          About us
        </Link>
        <Link className="link" to="/gallery" onClick={() => {setOpenMenu(false)}}>
          Gallery
        </Link>
        <Link className="link" to="/contactUs" onClick={() => {setOpenMenu(false)}}>
          Contact Us
        </Link>
        <Link className="link" to="/apointment" onClick={() => {setOpenMenu(false)}}>
          Appointment
        </Link>
        
      </header>
      <Routes>
        <Route path="/"  element={<Home></Home>} ></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/aboutUs" element={<><Page data={aboutPageData}></Page><About></About></>}></Route>
        <Route path="/gallery" element={<><Page data={galleryPageData}></Page><Gallery></Gallery></>}></Route>
        <Route path="/contactUs" element={<><Page data={contactPageData}></Page><ContactUs></ContactUs></>}></Route>
        <Route path="/apointment" element={<Page data={appointmentPageData}></Page>}></Route>
      </Routes>
    </BrowserRouter>
    </>
    )
}

export default App


