import { Link } from "react-router-dom";
const Bloglist = ({blogs,title}) => {
    
    return (
            <div className="blocklist">
            <h1>All Bllogs!!!</h1>    
            {blogs.map((blogs)=>
            <div className="blockspreview" key={blogs.id}>
                <Link to={`/blog/${blogs.id}`}>
                <h1>{blogs.title}</h1>
                <p>Author - {blogs.author}</p>
                </Link>
            </div>
            )}
            </div>
      );
}
 
export default Bloglist;