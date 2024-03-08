import React from 'react'
import flameGrilledMeatImage from "../../assets/images/flame-grilled-meat-cooking-flames-generative-ai.jpg";

const CarouselHome = () => {
    return (

        <div className="container-fluid">
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner" id='carousel'>
                    <div className='carousel-caption' style={{ zIndex: '10' }}>
                        <form className='d-flex'>
                            <input className='form-control me-1' type='search' placeholder='Search' aria-label='Search' />
                            <button className='btn btn-outline-success text-white bg-black' type='submit'>Search </button>
                        </form>

                    </div>
                    <div className="carousel-item active">
                        <img src={flameGrilledMeatImage} className="d-block w-100 " alt="Flame Grilled Meat" />

                    </div>
                    <div className="carousel-item active">
                        <img src={flameGrilledMeatImage} className="d-block w-100 " alt="Flame Grilled Meat" />

                    </div>
                    <div className="carousel-item active">
                        <img src={flameGrilledMeatImage} className="d-block w-100 " alt="Flame Grilled Meat" />

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
        </div>
    );
};

export default CarouselHome