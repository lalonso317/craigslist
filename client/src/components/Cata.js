import React from 'react'
import { Link } from 'react-router-dom'
import { useAccounts  } from '../redux/ducks/users'

export default function Cata(props){

const id = props.match.params.id
const slug = props.match.params.slug

const { cats, subOne, subTwo, subThree, subFour, subFive, subSix, subSeven } = useAccounts()

    return(
        <div>
            <div className="front">
                <aside className="aside">
                    <p>craigslist</p>
                    <p>create posting</p>
                    {/* <Link style={{textDecoration: 'none'}}to={`/createPost/${slug}/${id}`}>
                        <div>
                            <p>Create New Post</p>
                        </div>
                    </Link> */}
                    <p>my account</p>
                    <input type="text" placeholder="search craigslist"/>
                    <div className="calender">
                        <div className="days">M T W T F S S</div>
                        <div className="nums">18 19 20 21 22 23 24</div>
                        <div className="nums">25 26 27 28 29 30 1</div>
                        <div className="nums">2 3 4 5 6 7 8 </div>
                        <div className="nums">9 10 11 12 13 14 15</div>
                    </div>
                </aside>
                <div className="allcats">
                    <div className="com">
                        <p className="cats" >{cats.name1}</p>
                        <div className="doscolumns">
                        {subOne.map((item,i) =>(
                            <Link key={'sub' + i} style={{textDecoration: 'none'}} to={`/Posts/${item.slug}/${item.id}`}>
                                <div className="subcats">
                                    <p>{item.name}</p>
                                </div>
                            </Link>
                            ))}
                        </div>
                    </div>
                    <div className="housing">
                        <p className="cats">{cats.name2}</p>
                        <div className="doscolumns">
                            {subTwo.map((item,i) =>(
                            <Link key={'sub' + i} style={{textDecoration: 'none'}} to={`/Posts/${item.slug}/${item.id} `}>
                                <div className="subcats">
                                    <p>{item.name}</p>
                                </div>
                            </Link>
                            ))}
                        </div>
                    </div>
                    <div className="jobs">
                        <p className="cats">{cats.name3}</p>
                        <div className="doscolumns">
                            {subThree.map((item,i) =>(
                            <Link key={'sub' + i} style={{textDecoration: 'none'}}  to={`/Posts/${item.slug}/${item.id} `}>
                                <div className="subcats">
                                    <p>{item.name}</p>
                                </div>
                            </Link>
                            ))}
                        </div>
                    </div>
                    <div className="services">
                        <p className="cats">{cats.name4}</p>
                        <div className="doscolumns">
                            {subFive.map((item,i) =>(
                            <Link key={'sub' + i} style={{textDecoration: 'none'}}  to={`/Posts/${item.slug}/${item.id} `}>
                                <div className="subcats">
                                    <p>{item.name}</p>
                                </div>
                            </Link>
                            ))}
                        </div>
                    </div>
                    <div className="forsale">
                        <p className="cats">{cats.name5}</p>
                        <div className="doscolumns">
                            {subFour.map((item,i) =>(
                            <Link key={'sub' + i} style={{textDecoration: 'none'}}  to={`/Posts/${item.slug}/${item.id} `}>
                                <div className="subcats">
                                    <p>{item.name}</p>
                                </div>
                            </Link>  
                            ))}
                        </div>
                    </div>
                    <div className="gigs">
                        <p className="cats">{cats.name7}</p>
                        <div className="doscolumns">
                            {subSeven.map((item,i) =>(
                            <Link key={'sub' + i} style={{textDecoration: 'none'}}  to={`/Posts/${item.slug}/${item.id} `}>
                                <div className="subcats">
                                    <p>{item.name}</p>
                                </div>
                            </Link>    
                            ))}
                        </div>
                    </div>
                    <Link style={{textDecoration: 'none'}}  to={`/Posts/${slug}/${id} `}>
                    <div className="resume">
                        <p className="cats">{cats.name8}</p>
                    </div>
                    </Link>
                    <div className="personals">
                        <p className="cats">{cats.name6}</p>
                        <div className="doscolumns">
                            {subSix.map((item,i) =>(
                            <Link key={'sub' + i} style={{textDecoration: 'none'}}  to={`/Posts/${item.slug}/${item.id} `}>
                                <div className="subcats">
                                    <p>{item.name}</p>
                                </div>
                            </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <aside>
                                <div className="allcities">
                <Link style={{textDecoration: 'none'}} to="/Cata">
                    <div className="city">
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
                    </div>
                </Link>
                </div>
                </aside>
            </div>
        </div>
    )
}