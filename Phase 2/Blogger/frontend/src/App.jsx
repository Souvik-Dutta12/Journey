import React from 'react'
import Nav from './components/Nav'

import {Route,Router,Routes} from 'react-router-dom'
import  Home  from './pages/Home'
import Signup from './components/Signup'
import Login from './components/Login'
import CollectionHero from './pages/CollectionHero'
import WriteBlog from './pages/WriteBlog'
import ReadBlog from './pages/ReadBlog'
import Total from './pages/Total'
import Draft from './pages/Draft'

const App = () => {
  return (
    <div className='w-screen h-auto '>
      <Nav />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/collection' element={<CollectionHero />} />
        <Route path='/writeblog' element={<WriteBlog />}/>
        <Route path='/readblog' element={<ReadBlog />}/>
        <Route path='/total' element={<Total />}/>
        <Route path='/draft' element={<Draft />}/>
      </Routes>
 

      
    </div>
  )
}

export default App
