import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import Product from '../components/Product';

const Home = () => {
    const API_URL = "https://fakestoreapi.com/products";
    //changes for github
    const [loading,setloading]=useState(false);
    const [posts,setposts]=useState([]);
    
    async function fatchproductdata(){
      setloading(true)
        try {
            let res=await fetch(API_URL);
            let data=await res.json();
            setposts(data);

        } catch (error) {
            console.log("errore he bhai")
            setposts([]);

        }
      setloading(false)

    }

    useEffect(()=>{
      fatchproductdata()
    },[])
  return (
    <div>
      {
        loading?<Spinner className="flex justify-center items-center h-full"/>:
        posts.length>0?
        (
       <div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
       {
        posts.map((post)=>(
            <Product  key = {post.id} post={post}/>
        ))
       }

       </div>
        ):<div className='flex justify-center items-center'>
            <p>No Data Found</p>
            </div>
        
      }
    </div>
  )
}

export default Home
