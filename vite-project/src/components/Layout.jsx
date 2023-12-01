import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import PostList from './PostList'
import { useEffect,useState } from 'react'
import styles from '../css modules/Layout.module.css'
function Layout(){
    const[url,setUrl]=useState('http://127.0.0.1:8000/blog')
    const [posts,setPost]=useState([])
    const [count,setcount]=useState(0)
useEffect(() => {
    async function fetchData() {
        try {
            let response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            let data = await response.json();
            console.log(data);
            try{
                setPost([...data])
            }
            catch(error){
                setPost([data])
            }
            
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    fetchData();
}, [url]);

    

    function setPath(pk){
        setcount(count+1)
        if (count===0){
        const  ur=`${url}/${pk}`
        setUrl(ur);
        console.log(ur)
    }
    }

    async function onSearch(query){
        let options={
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                },
                body:JSON.stringify({"query":query})
                };

                    
                    try{
                        let response = await fetch('http://127.0.0.1:8000/search', options);
                        let data = await response.json();
                    try{
                        setPost([...data])
                    }
                    catch{
                        setPost([data])
                    }
                    }
                    catch (error) {
                        console.error(error);
                    }
                    
        
    }

    



    return(
        <div className={styles.main}>
            <Navbar onSearch={onSearch}></Navbar>
            <PostList posts={posts} setPath={setPath}></PostList>
            <Footer></Footer>
        </div>
    )
}

export default Layout