import React from 'react'
import {Link} from 'react-router-dom'
import { useAllPosts } from '../redux/ducks/post'

export default function Posts(props){
const {posts} = useAllPosts(props.match.params.slug)
const id = props.match.params.id
const slug = props.match.params.slug

    return (
        <div>
             <h2>Hello World</h2>
                <Link style={{textDecoration: 'none'}}to={`/createPost/${slug}/${id}`}>
                        <div>
                            <p>Create New Post</p>
                        </div>
                    </Link>
                <div>
                    <p>Posts</p>
                    {posts.map(post =>(
                    <Link to={"/post/" + post.id}> {post.name}</Link>
                    ))}
            </div>
        </div>
    )
}


