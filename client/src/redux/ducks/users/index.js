import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

// action definitions
const GET_CATEGORIES = "categories/GET_CATEGORIES"
const ALL_CATEGORIES ="categories/ALL_CATERGORIES"
const SUB_CATEGORIES = "categories/SUB_CATEGORIES"
const CREATE_POST = 'post/CREATE_POST'

// initial state
const initialState = {
  cate: [],
  ids:[],
  sub: []
  
}


// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return { ...state, cate: action.payload }
    case ALL_CATEGORIES:
      return { ...state, ids: action.payload}
    case SUB_CATEGORIES:
      return { ...state, sub: action.payload }
    case CREATE_POST:
      return { ...state, post: action.payload}
    default:
      return state
  }
}

// action creators
const getUsers = () => {
  return dispatch => {
    axios.get("/users").then(resp => {
      const catNames ={
          name1: resp.data[0].name,
          name2: resp.data[1].name,
          name3: resp.data[2].name,
          name4: resp.data[3].name,
          name5: resp.data[4].name,
          name6: resp.data[5].name,
          name7: resp.data[6].name,
          name8: resp.data[7].name
      }
      dispatch({
        type: GET_CATEGORIES,
        payload: catNames
        })
      dispatch({
        type: ALL_CATEGORIES,
        payload: resp.data
      })
      // console.log(resp.data)
      })
    }
}
const subCats = () => {
  return dispatch => {
    axios.get("/subcats").then(resp => {
      const newArray ={
        subone: newArr(resp.data),
        subtwo: newArrTwo(resp.data),
        subthree: newArrThree(resp.data),
        subfour: newArrFour(resp.data),
        subfive: newArrFive(resp.data),
        subsix: newArrSix(resp.data),
        subseven: newArrSeven(resp.data),      
      }
      dispatch({
        type: SUB_CATEGORIES,
        payload: newArray
        })
      })
    }
}

const makingPost = ( title, ids, description, price, location, email) =>{
  return dispatch =>{
    axios.post('/makepost/'+ {title,ids,description,price,location,email}).then(resp =>{
      dispatch({
        type: CREATE_POST,
        payload: resp.data
      })
    })
  }
}

// custom hooks
export function useAccounts() {
  const cats = useSelector(appState => appState.userState.cate)
  const ids = useSelector(appState => appState.userState.ids)
  const sub = useSelector(appState => appState.userState.sub)
  const post = useSelector(appState => appState.userState.post)
  const dispatch = useDispatch()
  const subcats = e => dispatch(subCats(e))
  const makepost = item => dispatch(makingPost(item))
  
  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

 useEffect(()=>(
   subcats()
 ),[])

  return { cats, ids, sub, subOne, subTwo, subThree, subFour, subFive, subSix, subSeven, post, makepost, getUsers }
}

// Each one of these function produces the Sub-Categories statically from the original, with a for loop, it sets a beginning and a end for the index. The sub-catergoires should not change from this data set, however if a catergory was add the limits would change. 

var subOne = []
function newArr(oldArr){
  for (let i =0; i < 15; i++){
    subOne.push(oldArr[i])
  }
}
console.log(subOne)

var subTwo = []
function newArrTwo(oldArr){
  for( let i =15; i < 25; i++){
    subTwo.push(oldArr[i])
  }
}

var subThree = []
function newArrThree(oldArr){
  for ( let i = 25; i <58; i++){
    subThree.push(oldArr[i])
  }
}
var subFour = []
function newArrFour(oldArr){
  for ( let i = 58; i <95; i++){
    subFour.push(oldArr[i])
  }
}
var subFive = []
function newArrFive(oldArr){
  for ( let i = 95; i <115; i++){
    subFive.push(oldArr[i])
  }
}
var subSix = []
function newArrSix(oldArr){
  for ( let i = 115; i <122; i++){
    subSix.push(oldArr[i])
  }
}
var subSeven = []
function newArrSeven(oldArr){
  for ( let i = 122; i <130; i++){
    subSeven.push(oldArr[i])
  }
}

 // subtwo: resp.data.slice(15,24),
        // subthree: resp.data.splice(25,63),
        // subfour: resp.data.splice(64,101),
        // subfive: resp.data.splice(102,121),
        // subsix: resp.data.splice(115,121),
        // subseven: resp.data.splice(122, 129)