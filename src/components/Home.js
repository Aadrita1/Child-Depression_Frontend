import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'
import Navbar from './Navbar'
const Home = () => {
  const navigate = useNavigate()
  return (
    <>
    <Navbar/>
     <div className="page-container">
     <p className="heading1">Welcome to Child Depression Predictor</p>
     <p className="heading2">Childhood depression is a serious mental health condition that affects the emotional well-being of children and adolescents. It's crucial to recognize the signs and symptoms to provide early intervention and support. Depression is not just a passing mood or occasional sadness—it's a medical condition that can have a significant impact on a child's life.</p>
     <button className='get-started-button' onClick={() => (navigate("/form"))}>Get Started</button>
   </div>
   </>
  )
}

export default Home