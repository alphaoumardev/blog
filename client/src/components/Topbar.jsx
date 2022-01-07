import './css/topbar.css'
import {Link} from "react-router-dom";
import {useContext} from "react";
import {Context} from "../context/Context"
const Topbar =()=>
{
    const PF = "http://localhost:5000/images/"
    const {user, dispatch} = useContext(Context)
    const handleLogout= async ()=>
    {
        dispatch({type:"LOGOUT"})
    }
    return (
        <div className="top">
            <div className="top-left">
                <i className=" topIcon fab fa-facebook"/>
                <i className=" topIcon fab fa-twitter"/>
                <i className=" topIcon fab fa-instagram"/>
                <i className=" topIcon fab fa-google"/>
                <i className=" topIcon fas fa-envelope"/>
            </div>
            <div className="top-center">
                <ul className="toplist">
                    <li className="toplistItem">
                        <Link className="link" to="/">HOME</Link>
                    </li>
                        <li className="toplistItem"><Link className="link" to="/">ABOUT</Link></li>
                        <li className="toplistItem"><Link className="link" to="/">CONTACT</Link></li>
                        <li className="toplistItem"><Link className="link" to="/write">WRITE</Link></li>
                        <li className="toplistItem" onClick={handleLogout}><Link className="link" to="/login">{user && 'LOGOUT'}</Link>
                    </li>
                </ul>
            </div>
            <div className="top-right">
                {user?
                (
                    <Link to="/settings">
                        <img className="topImage" src={PF+user.profilePic} alt="mee" />
                    </Link>//"https://diallo.oss-cn-shanghai.aliyuncs.com/photos/diallo.jpg"
                ):(
                    <ul className="toplist">
                        <li className="toplistItem">
                            <Link className="link" to="/login">LOGIN</Link>
                        </li>
                        <li className="toplistItem">
                            <Link className="link" to="/register">REGISTER</Link>
                        </li>
                    </ul>
                )}
                <i className=" topSearch fas fa-search"/>

            </div>

        </div>
    )
}
export default Topbar
