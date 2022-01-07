import Topbar from './components/Topbar'
import Home from './pages/Home'
import Single from "./pages/Single";
import Write from "./pages/Write";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Route ,Routes } from 'react-router-dom';
import {useContext} from "react";
import {Context} from "./context/Context";

function App()
{
  const {user}= useContext(Context);
  return (
    <div className="App">
        <Topbar/>

        <Routes>
            <Route exact path="/"   element={user?<Home/>:<Login message="You're not logged in"/>}/>
            <Route path="/single"   element={<Single/>}/>
            <Route path="/register" element={user?<Home/>:<Register />}/>
            <Route path="/write"    element={user?<Write/>:<Login message="You're not logged in"/>}/>
            <Route path="/settings" element={user?<Settings/>:<Login message="You're not logged in"/>}/>
            <Route path="/login"    element={user?<Home/>:<Login message="You're not logged in"/>}/>
            <Route path="/post/:postId" element={<Single/>}/>
        </Routes>

    </div>
  );
}

export default App;
