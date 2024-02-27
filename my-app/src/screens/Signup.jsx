import React, { useState } from 'react'
import { Link, json } from 'react-router-dom'

const Signup = () => {
    const [credentials, setcredentials] = useState({ name: '', email: '', password: '', location: '' })

    const handleSubmit = async (e) => {
        e.preventDeafult();
        const response = fetch("http://localhost:5000/api/createuser", {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        })


    }
    return (
        <>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label for="name" className="form-label">Name</label>
                        <input type="email" className="form-control" />

                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>

                    <button type="submit" className=" m-3 btn btn-primary">Submit</button>
                    <Link to="/login" className=" m-3 btn btn-primary" >Already a User?  </Link>
                </form>
            </div>


        </>
    )
}

export default Signup