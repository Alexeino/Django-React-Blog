/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [blogs,setBlogs] = useState([]);
  const [featuredBlog,setFeaturedBlog] = useState([]);
  // console.log("Initialized states")

  useEffect(()=>{
    const fetchData = async () =>{
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/featured/`);
        setFeaturedBlog(response.data[0]);
        // console.log(response.data);

      } catch (error) {
        console.log(error)
      }
    }

    fetchData();
    // console.log(featuredBlog);
  },[])

    useEffect(()=>{
    const fetchBlogs = async () =>{
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/`);
        setBlogs(response.data);
        // console.log(response.data);
        
      } catch (error) {
        console.log(error)
      }
    }
    fetchBlogs();
  },[])

  // eslint-disable-next-line no-unused-vars
  const capitalizeFirstLetter = (word)=>{
    if (word){
      return word.charAt(0).toUpperCase() + word.slice(1)
    }
    return '';

  }

  const getBlogs = () =>{
      let list = [];
      let result = [];

      blogs.map(blog => {
        console.log(blog);
        return list.push(
            <div className="row g-0 mt-3 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                  <strong className="d-inline-block mb-2 text-primary">{capitalizeFirstLetter(blog.category)}</strong>
                  <h3 className="mb-0">{blog.title}</h3>
                  <div className="mb-1 text-muted">{blog.month} {blog.day}</div>
                  <p className="card-text mb-auto">{blog.exercept}</p>
                  <Link to={`/blog/${blog.slug}`} className="stretched-link">Continue reading</Link>
              </div>
              <div className="col-auto d-none d-lg-block">
                  <img width='200' height='250' src={blog.thumbnail} className="cover-img" alt='thumbnail' />
              </div>
            </div>
        )
      })

      for(let i =0; i< list.length; i += 2){
        result.push(
          <div key={i} className="row mb-2">
            <div className="col-md-6">
              {list[i]}
            </div>
            <div className="col-md-6">
              {list[i+1] ? list[i+1] : null}
            </div>
          </div>
        )
      }

      // console.log("list in getblog()",list);
      return result
  }

  return (
            <div className='container mt-3'>
            <div className="nav-scroller py-1 mb-2">
                <nav className="nav d-flex justify-content-between">
                    <Link className="p-2 text-muted" to='/category/django'>Django</Link>
                    <Link className="p-2 text-muted" to='/category/celery'>Celery</Link>
                    <Link className="p-2 text-muted" to='/category/postgresql'>PostgreSQL</Link>
                    <Link className="p-2 text-muted" to='/category/sql'>SQL</Link>
                    <Link className="p-2 text-muted" to='/category/docker'>Docker</Link>
                    <Link className="p-2 text-muted" to='/category/python'>Python</Link>
                    <Link className="p-2 text-muted" to='/category/reactjs'>React JS</Link>
                    <Link className="p-2 text-muted" to='/category/javascript'>Javascript</Link>
                    <Link className="p-2 text-muted" to='/category/others'>Others</Link>
                </nav>
            </div>
            <div className="jumbotron p-4 p-md-5 text-white rounded bg-dark d-flex">
                <div className="col-md-6 px-0">
                    <h1 className="display-4 font-italic">{featuredBlog.title}</h1>
                    <p className="lead my-3">{featuredBlog.exercept}</p>
                    <p className="lead mb-0">
                        <Link to={`/blog/${featuredBlog.slug}`} className="text-white font-weight-bold">
                            Continue reading...
                        </Link>
                    </p>
                </div>
                <div className="col-md-6 px-0">
                  {/* <img src={featuredBlog.thumbnail} height='250' alt="" /> */}
                </div>
            </div>
          {getBlogs()}
        </div>

  )
}

export default Blog