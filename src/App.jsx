
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Text from './pages/Text'
import Video from './pages/Video'
import Home from './pages/Home'

function App() {
  return (
    <>
      {/* <Home/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/text' element={<Text/>}/>
          <Route path='/video' element={<Video/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
