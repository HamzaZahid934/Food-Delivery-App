import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import brandlogo from "../assets/images/Mainlogo.png"

const Signup = () => {
    const [credentials, setCredentials] = useState({ name: '', email: '', password: '', location: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.location })
        });

        const json = await response.json();
        console.log(json);

        if (!json.success) {
            alert('enter valid credentials');
        }
    };

    const onChange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value });
    };

    return (
        <>
            <div className="container-fluid">
                <div className="row justify-content-center align-items-center">
                    <div className="col-auto">
                        <Link className="navbar-brand" to="#">
                            <img src={brandlogo} className=" img-fluid logo" alt='Brand Logo' />
                        </Link>
                    </div>
                </div>
            </div>
            <div className='container '>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address:</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onChange} />
                        <div id="emailHelp" className="form-text"></div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password:</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Address:</label>
                        <input type="text" className="form-control" name='location' value={credentials.location} onChange={onChange} />
                    </div>
                    <button type="submit" className=" btn btn-primary-signup">Sign Up</button>
                    <div>
                        <Link to="/login" className="mt-2 link ">Already a User?</Link>
                    </div>
                </form>
            </div>
            <div className="container-fluid">
                <p>&copy; {new Date().getFullYear()} GoodFood</p>
            </div>

        </>


    );
};

export default Signup;