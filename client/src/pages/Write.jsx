import React, {useContext, useState} from 'react';
import './css/write.css'
import axios from "axios";
import {Context} from "../context/Context";

const Write = () =>
{
    const [title, setTitle]=useState("")
    const [desc, setDesc]=useState("")
    const [file, setFile]=useState(null)
    const {user}= useContext(Context)

    const handleSubmit= async(e)=>
    {
        e.preventDefault()

        const newPost={title, desc,username:user.username}
        if(file)
        {
            const data= new FormData()
            const filename= Date().now + file.name
            data.append("name",filename)
            data.append("file",file)
            newPost.photo=filename
            try
            {
                await axios.post("/upload",data)
            }
            catch (e) {}
        }
        try
        {
            const res= await axios.post("/posts", newPost)
            window.location.replace("/post/"+res.data._id)
        }
        catch (e) {}
    }
    return (
        <div className="write">
            {file &&( <img  className="writeImg"  src={URL.createObjectURL(file)} alt=""/>)}


          <form className="writeForm"  onSubmit={handleSubmit}>
            <div className="writeFormGroup">
              <label htmlFor="fileInput">
                <i className="writeIcon fas fa-plus"/>
              </label>
              <input id="fileInput" type="file" style={{ display: "none" }} onChange={(e)=>setFile(e.target.files[0])}/>
              <input
                onChange={(e)=>setTitle(e.target.value)}
                className="writeInput"
                placeholder="Title"
                type="text"
                autoFocus={true}
              />
            </div>
            <div className="writeFormGroup">
              <textarea
                  onChange={(e)=>setDesc(e.target.value)}
                  className="writeInput writeText"
                placeholder="Tell your story..."
                type="text"
                autoFocus={true}
              />
            </div>
            <button className="writeSubmit" type="submit" > Publish </button>
          </form>
        </div>
    );
}

export default Write;
