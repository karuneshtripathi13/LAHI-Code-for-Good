import Bloglist from "./bloglist";
import useFetch from "./useFetch";

const Home = () => {
    // //let name="Abhiram";
    // const [name,setName]=useState('Abhiram');
    // const [age,setAge]=useState(15);
    // const clicker= () =>
    // {   
    //     const ch='Abhiram Srivathsa K H';
    //     setName(ch);
    //     setAge(age+1);
    //     console.log(name,age);
        
    // }
    const {data : blogs ,isload , error}=useFetch('http://localhost:8000/blogs');
    // const deletblog = (id)=>
    // {
    //     const newBlogs = blogs.filter(blog => blog.id !== id );
    //     setBlogs(newBlogs);
    // }
    
    return ( 
        <div className="home">
        {error && <div className="error">{error}</div>}
        {isload && <div className="loading">Loading...</div>}   
        {blogs && <Bloglist blogs={blogs}  title='All Blogs' />}
            
        </div>
     );
}
 
export default Home;