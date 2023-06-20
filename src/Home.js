import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={2799}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="Kenwood 0W20011139 kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl, Removable Splash Guard, 1000 W, Red"
            price={33999}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Fitbit Charge 5 Tracker, Black/Graphite, Up to 7 Days Battery Life, Built-in GPS, Smart Watch"
            price={17802}
            image="https://m.media-amazon.com/images/I/61YZjvbIC3L._AC_SX679_.jpg"
            rating={4}
          />
          <Product
            id="23445930"
            title="Echo 4th Generation - Smart Speaker with Alexa - Premium Sound & Smart Home Hub, Charcoal"
            price={11980}
            image="https://m.media-amazon.com/images/I/7137zJkDjKL._AC_SX679_.jpg"
            rating={4}
          />
          <Product
            id="3254344345"
            title="Apple 12.9-inch iPad Pro (Wi-Fi, 256GB) - Space Gray (6th Generation)"
            price={188800}
            image="https://m.media-amazon.com/images/I/81c+9BOQNWL._AC_SX679_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="3254344345"
            title="Samsung Odyssey Neo G9 S49AG950NC 49' 32:9 Super Ultra Wide, Mini LED Dual WQHD 5120 x 1440"
            price={294900}
            image="https://m.media-amazon.com/images/I/71-fmKZK1eL._AC_SX679_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
