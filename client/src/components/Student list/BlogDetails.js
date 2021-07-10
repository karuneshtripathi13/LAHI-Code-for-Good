import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router";
const Blogdetails = () => {
    const {id}=useParams();
    const {data : blog  , isload , error}=useFetch('http://localhost:8000/blogs/'+id);
    const his=useHistory();
    const handleclick=()=>
    {
        fetch('http://localhost:8000/blogs/'+blog.id,
        {
            method:'DELETE'
        }).then(()=>
        {
            his.push('/');
        })

    }
    return (
        <div className="blogdetails">
            {error && <div className="error">{error}</div>}
            {isload && <div className="loading">Loading...</div>}
            <h2>Blog Details-</h2>
            {blog && (
                <article>
                <h3>{blog.title}</h3>
                <h4>Author - {blog.author}</h4>
                <p>{blog.body}</p>
                <button onClick={handleclick}>Delete</button>
                </article>
            )}
            
        </div>
      );
}
 
export default Blogdetails;