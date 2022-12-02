import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="movie_add"
      />

      <div className="home__row">
        <Product
          id="1"
          title="Mammon women's cream handbag combo (set of 3)"
          price={12}
          rating={5}
          image="https://m.media-amazon.com/images/I/71bdgYfofhL._UX625_.jpg"
        />

<Product
          id="2"
          title="Hornbull Themes Brown RFID Blocking Leather Wallet for Men | Wallets Men Leather"
          price={18}
          rating={4}
          image="https://m.media-amazon.com/images/I/81ptzVTG0jL._SY450_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="3"
          title="realme narzo 50A Prime (Black, 4GB RAM+128GB Storage) T612 Processor | 50MP AI Triple Camera | Charger Included"
          price={120}
          rating={4}
          image="https://m.media-amazon.com/images/I/71IL+JcuxgL._SX425_.jpg"
        />

        <Product
          id="4"
          title="Arshia Fashions Girl's Net Frock Dress, Girls Birthday Dress"
          price={30}
          rating={3}
          image="https://m.media-amazon.com/images/I/71YUbf1VygL._UY550_.jpg"
        />

        <Product
          id="5"
          title="PUMA Men's Legacy Disrupt Basketball Shoe"
          price={73}
          rating={5}
          image="https://m.media-amazon.com/images/I/61YtMfsnB+L._UY500_.jpg"
        />
      </div>


      <div className="home__row">
        <Product
          id="6"
          title="Skybags Mint 80 cms Polycarbonate Turquoise Hardsided Check-in Luggage"
          price={45}
          rating={5}
          image="https://m.media-amazon.com/images/I/81-cDp-605L._UY550_.jpg"
        />
      </div>

    </div>
  );
};

export default Home;
