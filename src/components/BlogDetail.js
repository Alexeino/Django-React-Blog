import axios from 'axios'
import { Link , useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react'

const BlogDetail = (props) => {
  const [blog,setBlog] = useState({});
  const {slug} = useParams();
  // console.log("slug",slug);
  useEffect(()=>{

    const fetchBlog = async () =>{
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/${slug}`);
        setBlog(response.data);
        // console.log("Response",response.data)
      } catch (error) {
        
      }
    }

    fetchBlog();

  },[slug])

    // eslint-disable-next-line no-unused-vars
  const capitalizeFirstLetter = (word)=>{
    if (word){
      return word.charAt(0).toUpperCase() + word.slice(1)
    }
    return '';

  }

  const createBlog = () =>{
    return {__html: blog.content}
  }
  return (
    <div className="container mt-3">
      <h1 className="display-2">{blog.title}</h1>
      <h2 className="text-muted mt-3">Category: {capitalizeFirstLetter(blog.category)}</h2>
      <h4>{blog.month} {blog.day}</h4>
      <div className="mt-5 mb-5" dangerouslySetInnerHTML={createBlog()} />
      <hr />
      <p className="lead mb-5"><Link to = "/blog" className='fw-bold'>Back to Blog</Link></p>

    </div>
  )
}

export default BlogDetail