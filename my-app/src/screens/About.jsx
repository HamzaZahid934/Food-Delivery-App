import React from 'react'
import Navbar from '../Components/layouts/Navbar'
import Footer from '../Components/layouts/Footer'

const About = () => {
    return (
        <>

            <Navbar />
            <div class="container-fluid">
                <div class="heading">
                    <h2>This is About Page</h2>
                </div>
                <div class="paragraph">
                    <p>This is a paragraph within the grid content.</p>
                </div>
            </div>


            <Footer />

        </>
    )
}

export default About