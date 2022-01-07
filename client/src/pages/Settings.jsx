import "./css/settings.css";
import Sidebar from "../components/Sidebar";
import {useContext, useState} from "react";
import {Context} from "../context/Context"
import axios from "axios";

const Settings = ()=>
{
  const [file, setFile]=useState(null)
  const [username, setUsername]=useState("")
  const [password, setPassword]=useState("")
  const [email, setEmail]=useState("")
  const [success, setSuccess]=useState(false)
  const PF = "http://localhost:5000/images/"


  const {user,dispatch} = useContext(Context)

  const handleSubmit= async(e)=>
  {
    e.preventDefault()
    dispatch({type: "UPDATE_START"})
    const updateUser={userId:user._id, username,password,email}
    if(file)
    {
      const data= new FormData()
      const filename= Date().now + file.name
      data.append("name",filename)
      data.append("file",file)
      updateUser.profilePic=filename
      try
      {
        await axios.post("/upload",data)
      }
      catch (e) {}
    }
    try
    {
      const res=await axios.post("/users/"+user._id,updateUser)
      setSuccess(true)
      dispatch({type: "UPDATE_SUCCESS", payload:res.data})

    }
    catch (e) { dispatch({type: "UPDATE_FAILURE"})}
  }

    return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">Delete Your Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src={file ? URL.createObjectURL(file) : PF+user.profilePic}  alt=""  />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user"/>{" "}
            </label>
            <input
                onChange={(e)=>setFile(e.target.files[0])}
                id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder={user.username} name="name" onChange={(e)=>setUsername(e.target.value)} />
          <label>Email</label>
          <input type="email" placeholder={user.email} name="email" onChange={(e)=>setEmail(e.target.value)} />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" onChange={(e)=>setPassword(e.target.value)} />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
          {success && (<span style={{color: 'green',marginTop:'20px', textAlign: 'center'}}>Your profile has been updated...</span>)}
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
export default Settings
