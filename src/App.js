import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Layout from './hocs/Layout';
import Home from './components/Home';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail';
import Category from './components/Category';
const App = () => {
  return (
    <Router>
        <Layout>
            <Routes>
                <Route exact={true} path='/' element={<Home />} />
                <Route exact={true} path='/blog' element={<Blog />} />
                <Route exact={true} path='/category/:category' element={<Category />} />
                <Route exact={true} path='/blog/:slug' element={<BlogDetail />} />
            </Routes>
        </Layout>
    </Router>
  )
}

export default App