import React, { useState } from 'react'
import { useAccounts } from '../redux/ducks/users'


export default function CreatePost(props){
const { makepost, all} = useAccounts()
const [title, setTitle] = useState('')
const [description, setDescription] = useState('')
const [price, setPrice] = useState('')
const [location, setLocation] = useState('')
const [email, setEmail] = useState('')



function handleSubmit(e){
    e.preventDefault()
    return(
            makepost(title, all, description, price, location, email),
            setTitle(''),
            setDescription(''),
            setPrice(''),
            setLocation(''),
            setEmail('')
        )
}

    return(
        <div>
            <h1>Posts</h1>
            <form onSubmit={(e) =>{handleSubmit(e)}}>
                <div>
                    <label htmlFor="radio">Category:
                        <div>
                            {all.map(item =>(
                            <div key={item.id}>
                                <label htmlFor='radio'>{item.name}:</label>
                                    <input 
                                    type="radio" 
                                    value={item.id}>
                                </input>
                            </div>
                            ))}
                        </div>
                    </label>
                </div>
                <div>
                    <div>
                        <label htmlFor="text">
                            posting title:
                            <input
                             type="text" 
                             value ={title}
                             onChange = {e => setTitle(e.target.value)}
                             ></input>
                        </label>
                    </div>
                    <div>
                        <label  htmlFor="text">
                            price
                            <input
                             type="text"
                             value = {price}
                             onChange = {e => setPrice(e.target.value)}
                             ></input>
                        </label>
                    </div>
                    <div>
                        <label  htmlFor="text">
                            city or neighborhood
                            <input 
                            type="text"
                            value={location}
                            onChange={e => setLocation(e.target.value)}
                            ></input>
                        </label>
                    </div>
                <div>
                    <label  htmlFor="textarea">
                        description
                        <textarea
                        value = { description }
                        onChange = {e => setDescription(e.target.value)}
                        ></textarea>
                    </label>
                </div>
                <div>
                    <div>
                        <p>contact info</p>
                    </div>
                    <div>
                        <label  htmlFor="text">
                            email
                            <input 
                            type="text"
                            value={email}
                            onChange= {e => setEmail(e.target.value)}
                            ></input>
                        </label>
                    </div>
                </div>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>

            </form>
        </div>
    )
}
