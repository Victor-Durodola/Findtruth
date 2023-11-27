
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
          <Route path='/Findtruth' element={<Home/>}/>
          <Route path='/Findtruth/text' element={<Text/>}/>
          <Route path='/Findtruth/video' element={<Video/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
