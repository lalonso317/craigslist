import React from  'react'
import { Link } from 'react-router-dom'

export default function City(props){

    return(
        <div>
            <div className="allcities">
                <div className="title">
                    <h1>Cities</h1>
                </div>
                <div className="city">
                    <Link style={{textDecoration: 'none'}} to="/Cata">
                        <p className="a">Las Vegas</p>
                        <p className="a">Los Angels</p>
                        <p className="a">New York City</p>
                        <p className="a">Chicago</p>
                        <p className="a">Houston</p>
                        <p className="a">Phoenix</p>
                        <p className="a">Philadelphia</p>
                        <p className="a">San Antonio</p>
                        <p className="a">San Diego</p>
                        <p className="a">Dallas</p>
                        <p className="a">San Jose</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}