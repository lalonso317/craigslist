import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

const POSTED_ITEMS = 'post/POSTED_ITEMS'
const SINGLE_POST = 'post/SINGLE_POST'


const initialState = {
 posts:[],
 currentPost: {}
}
export default (state = initialState, action) => {
    switch (action.type) {
        case POSTED_ITEMS:
            return { ...state, posts: action.payload}
        case SINGLE_POST:
            return { ...state, currentPost: action.payload }
        default:
            return state
    }
}  
const getPosted = (slug) =>{
    return dispatch =>{
      axios.get('/posts/' + slug ).then(resp =>{
        dispatch({
          type: POSTED_ITEMS,
          payload: resp.data
        })
      })
    }
  }
  const getSinglePost = (postId) =>{
    return dispatch =>{
      axios.get('/post/' + postId).then(resp =>{
        dispatch({
          type: SINGLE_POST,
          payload: resp.data
        })
      })
    }
  }
// GET ALL THE POSTS
export function useAllPosts(slug){
    const posts = useSelector(appState => appState.postState.posts)
    const dispatch = useDispatch()

  
    useEffect(() =>{
      dispatch(getPosted(slug))
    }, [dispatch, slug])
    return posts 
  }
  
  // SINGLE POST 
  export function useAinglePost(postId){
  const currentPost = useSelector(appState => appState.postState.currentPost) 
  const dispatch = useDispatch()
  
  useEffect(() =>{
    dispatch(getSinglePost(postId))
  }, [dispatch, postId])
  return currentPost 
  }





// const makingPost = ( title, all, description, price, location, email) =>{
//     return dispatch =>{
//       axios.post('/makepost/'+ {title,all,description,price,location,email}).then(resp =>{
//         dispatch({
//           type: CREATE_POST,
//           payload: resp.data
//         })
//       })
//     }
//   }
// post:[],
// case CREATE_POST:
//         return { ...state, post: action.payload}
// const CREATE_POST = 'post/CREATE_POST'