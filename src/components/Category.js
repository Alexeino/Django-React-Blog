import React , {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
const Category = (props) => {
  const {category} = useParams();
  const [blogs,setBlogs] = useState([]);
  // const [currentCategory,setCurrentCategory] = useState('');

  useEffect(()=>{
    // Config for Post Request
    const config = {
      headers:{
        'Content-Type': 'application/json',
      }
    }

    const fetchBlog = async () =>{
      try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/blog/category/`,
        {category},
        config );
        setBlogs(response.data);        
      } catch (error) {
        console.log(error);
      }
    }

    fetchBlog();
  },[category])

   // eslint-disable-next-line no-unused-vars
  const capitalizeFirstLetter = (word)=>{
    if (word){
      return word.charAt(0).toUpperCase() + word.slice(1)
    }
    return '';

  }
  const getCategoryBlogs = () =>{
      let list = [];
      let result = [];

      blogs.map(blog => {
        console.log(blog)
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
                  {/* src={`http://localhost:8000${blog.thumbnail}`} */}
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

  // console.log(category);
  return (
          <div className='container mt-3'>
            <p className='fw-500 text-muted'><span className='text-warning'>Category / </span>{category}</p>
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
            {getCategoryBlogs()}
          </div>
            
        )
}

export default Category