import React from 'react'
import { Link } from 'react-router-dom'
import flameGrilledMeatImage from "../../assets/images/flame-grilled-meat-cooking-flames-generative-ai.jpg";


const Card = (props) => {

    let options = props.options;
    let priceOptions = Object.keys(options);



    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={props.imgSrc} className="card-img-top" alt="..." style={{ height: "150px", objectFit: "fill" }} />
            <div className="card-body">
                <h5 className="card-title">{props.foodName}</h5>
                <p className="card-text">Description</p>
                <div className='container w-100'>
                    <select className='m-2 h-100  rounded'>
                        {Array.from(Array(6), (e, i) => {
                            return (<option key={i + 1} value={i + 1}> {i + 1}</option>)
                        })}
                    </select>

                    <select className='m-2 h-100 rounded'>
                        {
                            priceOptions.map((data) => {
                                return <option key={data} value={data}>{data}</option>
                            })
                        }
                    </select>
                    <div className='d-inline h-100 fs-5'>
                        Total Price
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Card