import { useState , useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isload,setisload] =useState(true);
    const [error,seterr]=useState(null);
    useEffect(()=>{
        fetch(url)
            .then(res =>{
                if(!res.ok)
                {
                   throw Error('Could not fetch the resource');
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
                setData(data)
                setisload(false);
            })
            .catch(err =>
            {
                seterr(err.message);    
                setisload(false);
            })
    },[url])
    return {data , isload , error};
}
 
export default useFetch;