import "./singlePost.css";
import { useLocation } from "react-router-dom";
import { useEffect,useState,useContext } from "react";
import axios from "axios";
import  {Context} from '../../context/Context'

import { Link } from 'react-router-dom'


export default function SinglePost() {
  const location=useLocation()
  const path=location.pathname.split('/')[2]
  const [post,setPost]=useState({})
  const PF = 'localhost:5000/images/'
  const { user } = useContext(Context)
  const [title,setTitle]=useState('')
  const [desc,setDesc]=useState('')
  const [updateMode,setUpdateMode]=useState(false)
const handleDelete=async()=>{
  try{
    await axios.delete(`/posts/${post._id}`,{data:{username:user.username}})
  }catch(err){
    window.location.replace('/')

  }
}
 
const handleUpdate=async()=>{
  try {
    await axios.put(`/posts/${post._id}`, {
      username: user.username ,
      title,
      desc} 
    )}
   catch (err) {
    setUpdateMode(false)

  }
}
  useEffect(()=>{
    const getPost=async()=>{
      const res=await axios.get('/posts/' + path)
      setPost(res.data)
      setTitle(res.data.title)
      setDesc(res.data.desc)
    }
    getPost()
  },[path])
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
      {post.photo && (
        <img
          className="singlePostImg"
          src={PF + post.photo}
        />
      )}{
          updateMode ? 
          (<input
           type='text' 
           value={title} 
           className='singlePostTitleInput'
            autoFocus
            onChange={(e)=>setTitle(e.target.value)}
           /> 
          ): (

        
        <h1 className="singlePostTitle">
          {title}
          {post.username === user?.username && (<div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit" onClick={()=>setUpdateMode(true)}></i>
            <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
          </div>)}
          
        </h1>
          )}
        <div className="singlePostInfo">
          <span>
            Author:
            <Link to={`/?user=${post.username}`} className='link'>
            <b className="singlePostAuthor">
                {post.username}
            </b>
            </Link>
          </span>
          <span>{ new Date(post.createdAt).toDateString()}</span>
        </div>
        { updateMode ? (
          <textarea className="singlePostDescInput" value={desc}
           onChange={(e)=>setDesc(e.target.value)}/>
        ):(
        <p className="singlePostDesc">
          {desc}
          <br />
          <br />
          
        </p>
        )}
        {updateMode && (
      <button className="singlePostButton" onClick={handleUpdate}>Update</button>
      )}
      </div>
    </div>
  );
}