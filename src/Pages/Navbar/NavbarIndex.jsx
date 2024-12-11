import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router'
import Loading from '../../Components/Loading'

const NavBar = lazy(()=>import('./NavBar'))
const Home = lazy(()=>import('../Home'))
const About = lazy(()=>import('../About'))
const Image = lazy(()=>import('../Image'))
const WorkExperience = lazy(()=>import('../Work Experience'))
const Technology = lazy(()=>import('../Technology'))
const Experience = lazy(()=>import('../../Components/Experience'))
function NavbarIndex() {
  return (
  <>
 <Suspense fallback={<Loading/>}>
  <Routes>
  <Route path="/" element={<NavBar/>}>
   <Route index element={<Home/>}/>
   <Route path="/about" element={<About/>}/>
   <Route path="/image" element={<Image/>}/>
   <Route path="/experience" element={<Experience/>}/>
   <Route path="/project-experience" element={<WorkExperience/>}/>
   <Route path="/skills" element={<Technology/>}/>
  </Route>
  </Routes>
  </Suspense>
  </>
    
   
  )
}

export default NavbarIndex