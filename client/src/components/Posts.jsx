import Post from "./Post";
import "./css/posts.css";

const  Posts =({posts})=>
{
  return (
    <div className="posts" >
        {posts.map((p)=> <Post key={p._id} post={p}/>)}
    </div>
  );
}
export default Posts
