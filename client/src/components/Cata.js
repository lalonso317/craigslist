import React from 'react'
import { Link } from 'react-router-dom'
import { useAccounts } from '../redux/ducks/users'

export default function Cata(){
const { cats, subOne, subTwo, subThree, subFour, subFive, subSix, subSeven } = useAccounts()

    return(
        <div>
            <div className="allcats">
                <div className="com">
                    <p className="cats" >{cats.name1}</p>
                    <div>
                    {subOne.map((item,i) =>(
                        <Link key={'sub' + i} style={{textDecoration: 'none'}} to={`/Posts/${item.id}`}>
                        <div className="subcats">
                            <p>{item.name}</p>
                        </div>
                        </Link>
                            ))}
                    </div>
                </div>
                <div className="housing">
                    <p className="cats">{cats.name2}</p>
                    <div>
                        {subTwo.map((item,i) =>(
                        <Link key={'sub' + i} style={{textDecoration: 'none'}} to={`/Posts/${item.id} `}>
                            <div className="subcats">
                                <p>{item.name}</p>
                            </div>
                        </Link>
                        ))}
                    </div>
                </div>
                <div className="jobs">
                    <p className="cats">{cats.name3}</p>
                    <div>
                        {subThree.map((item,i) =>(
                        <Link key={'sub' + i} style={{textDecoration: 'none'}}  to={`/Posts/${item.id} `}>
                            <div className="subcats">
                                <p>{item.name}</p>
                            </div>
                        </Link>
                        ))}
                    </div>
                </div>
                <div className="services">
                    <p className="cats">{cats.name4}</p>
                    <div>
                        {subFive.map((item,i) =>(
                        <Link key={'sub' + i} style={{textDecoration: 'none'}}  to={`/Posts/${item.id} `}>
                            <div className="subcats">
                                <p>{item.name}</p>
                            </div>
                        </Link>
                        ))}
                    </div>
                </div>
                <div className="forsale">
                    <p className="cats">{cats.name5}</p>
                    <div>
                        {subFour.map((item,i) =>(
                        <Link key={'sub' + i} style={{textDecoration: 'none'}}  to={`/Posts/${item.id} `}>
                            <div className="subcats">
                                <p>{item.name}</p>
                            </div>
                        </Link>  
                        ))}
                    </div>
                </div>
                <div className="personals">
                    <p className="cats">{cats.name6}</p>
                    <div>
                        {subSix.map((item,i) =>(
                        <Link key={'sub' + i} style={{textDecoration: 'none'}}  to={`/Posts/${item.id} `}>
                            <div className="subcats">
                                <p>{item.name}</p>
                            </div>
                        </Link>
                        ))}
                    </div>
                </div>
                <div className="gigs">
                    <p className="cats">{cats.name7}</p>
                    <div>
                        {subSeven.map((item,i) =>(
                        <Link key={'sub' + i} style={{textDecoration: 'none'}}  to={`/Posts/${item.id} `}>
                            <div className="subcats">
                                <p>{item.name}</p>
                            </div>
                        </Link>    
                        ))}
                    </div>
                
                </div>
                <Link style={{textDecoration: 'none'}}  to={`/Posts/${cats.id} `}>
                <div className="resume">
                    <p className="cats">{cats.name8}</p>
                </div>
                </Link>
            </div>
            <Link style={{textDecoration: 'none'}}to="/createPost">
                    <div>
                        <p>Create New Post</p>
                    </div>
                    </Link>
        </div>
    )
}