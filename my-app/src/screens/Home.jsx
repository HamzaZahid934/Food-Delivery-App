import React, { useEffect, useState } from "react";
import Navbar from "../Components/layouts/Navbar";
import Card from "../Components/cards/Card";
import Footer from "../Components/layouts/Footer";
import flameGrilledMeatImage from "../assets/images/flame-grilled-meat-cooking-flames-generative-ai.jpg";




const Home = () => {

  const [search, setsearch] = useState('');
  const [foodCat, setfoodCat] = useState([]);
  const [fooditems, setfoodItems] = useState([]);

  const loadData = async () => {

    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {

        'Content-Type': 'application/json'
      }
    });
    response = await response.json();
    setfoodItems(response[0]);
    setfoodCat(response[1]);

  }

  useEffect(() => {
    loadData()
  }, [])


  return (
    <div div className="home-background">
      <Navbar />


      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: 'contain !important' }}>
        <div className="carousel-inner" id='carousel'>
          <div className='carousel-caption' style={{ zIndex: '10' }}>
            <div className='d-flex justify-content-center'>
              <input className='form-control me-1' type='search' placeholder='Search' aria-label='Search' value={search} onChange={(e) => { setsearch(e.target.value) }} />
              {/* <button className='btn btn-outline-success text-white bg-black' type='submit'>Search </button> */}
            </div>

          </div>
          <div className="carousel-item active">
            <img src={flameGrilledMeatImage} className="d-block w-100 " alt="Flame Grilled Meat" style={{ filter: 'brightness(30%)' }} />

          </div>
          <div className="carousel-item active">
            <img src={flameGrilledMeatImage} className="d-block w-100 " alt="Flame Grilled Meat" style={{ filter: 'brightness(30%)' }} />

          </div>
          <div className="carousel-item active">
            <img src={flameGrilledMeatImage} className="d-block w-100 " alt="Flame Grilled Meat" style={{ filter: 'brightness(30%)' }} />

          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>


      <div>
        {foodCat.length !== 0 ? foodCat.map((data) => {
          return (
            <div key={data._id} className="row mb-3">
              <div className="fs-3 m-3">{data.CategoryName}</div>
              <hr />
              {fooditems.length !== 0 ? fooditems.filter((items) => (items.CategoryName === data.CategoryName) && (items.name.toLowerCase().includes(search.toLocaleLowerCase()))).map(filterItems => {
                return (
                  <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
                    <Card foodName={filterItems.name}
                      options={filterItems.options[0]}
                      imgSrc={filterItems.img} />
                  </div>
                )
              }) : <div>no such data found</div>}
            </div>
          )
        }) : ""}
      </div>
      <Footer />
    </div>
  );
};

export default Home;