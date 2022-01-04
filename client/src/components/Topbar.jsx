import './css/topbar.css'
import {Link} from "react-router-dom";

const Topbar =()=>
{
    const user = false
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
                        <li className="toplistItem"><Link className="link" to="/login">{user && 'LOGOUT'}</Link>
                    </li>
                </ul>
            </div>
            <div className="top-right">
                {user?
                (
                        <img className="topImage" src="https://diallo.oss-cn-shanghai.aliyuncs.com/photos/diallo.jpg" alt="mee" />
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
