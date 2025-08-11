import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Company from './pages/Company'
import AboutDetail from './pages/AboutDetail'

function App() {
  return (
    <div className='container'>
      <h1>라우터 실습</h1>
      <nav>
        <Link to='/'>홈</Link> ||
        <Link to='/about'> 소개</Link> ||
        <Link to='/company'> 회사</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/about/:id' element={<AboutDetail />} />
        <Route path='/company' element={<Company />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </div>
  )
}

export default App
