import {Link, useLocation} from "react-router-dom";
import "./css/singlePost.css";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {Context} from "../context/Context";


const  SinglePost=()=>
{
  const location= useLocation()
  const path = location.pathname.split("/")[2]
  const [post, setPost]= useState({})
  const PF = "http://localhost:5000/images/"
  const {user}= useContext(Context)

  const [title,setTitle]=useState("")
  const [desc,setDesc]=useState("")
  const [updateMode, setUpdateMode]=useState(false)

  const handleDelete = async ()=>
  {
    try
    {
      await axios.delete(`/posts/${post._id}`+ path,{data:{username: user.username}})
      window.location.replace("/")
    }
    catch (e){}
  }
  const handleUpdate= async ()=>
  {
    try
    {
      await axios.put(`/posts/${post._id}`+ path,{username: user.username,title,desc})
      // window.location.reload()
      setUpdateMode(false)
    }
    catch (e){}
  }

  useEffect(()=>
  {
    const getPost= async ()=>
    {
      const res=await axios.get("/posts/"+ path)
      setPost(res.data)
      setTitle(res.data.title)
      setDesc(res.data.desc)
      console.log(res)
    }
    getPost().then();
  },[path])
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {PF+post.photo &&(<img className="singlePostImg" alt="" src={post.photo} />)}
        {updateMode ? <input type="text" className="writeInput"  value={title} autoFocus
                             onChange={(e)=>setTitle(e.target.value)}/>:
            (
                <h1 className="singlePostTitle">
                  {title}
                  {post.username === user?.username && (
                      <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit" onClick={()=>setUpdateMode(true)}/>
                        <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}/>
                      </div>
                  )}

                </h1>
            )}
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to={`/posts?/${post.username}`}>{post.username}  </Link>
            </b>
          </span>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>
        {updateMode ? <textarea className="writeInput " value={desc}
                                onChange={(e)=>setDesc(e.target.value)}/>:
            (<p className="singlePostDesc">{desc}</p>)}

        {updateMode &&(<button type="submit" className="singlePostButton" onClick={handleUpdate}>Update</button>)}
      </div>
    </div>
  );
}
export default SinglePost
