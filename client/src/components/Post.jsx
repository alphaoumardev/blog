import { Link } from "react-router-dom";
import "./css/post.css";

const Post=({post})=>
{
    // const PF = "http://localhost:5000/images"

    return (
    <div className="post">
        {post.photo&& (<img className="postImg" src={post.photo} alt="" />)}
      <div className="postInfo">
        <div className="postCats">
            {post.categories.map((c,index)=><Link key={index} className="link" to="/posts?cat=Music">{c.name} </Link>)}
        </div>
          <Link to={`/post/${post._id}`} className="link">
              <span className="postTitle"> {post.title}</span>
          </Link>
        <hr />
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}
export default Post
