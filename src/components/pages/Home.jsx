import React from 'react'
import Layout from '../layout/Layout'
import { Link } from 'react-router-dom'
import bannerImage from '../images/banner.jpeg';
import '../styles/HomeStyles.css'


const Home = () => {
  return (
    <Layout>
        <div className="Home" style={{background: `url(${bannerImage})`}}>
          <div className="headerContainer">
            <h1>Food Website</h1>
            <p>Best Food in India</p>
            <Link to="/menu">
              <button>Order Now</button>
            </Link> 
          </div>
        </div>
    </Layout>
  )
}   

export default Home