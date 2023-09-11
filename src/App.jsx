import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import NavaBar from './components/NavBar'

function App() {
  
  return (
    <BrowserRouter>
      <NavaBar></NavaBar>
      <Routes>
        <Route exact path="/" element={<ItemListContainer/>} />
        <Route exact path="/category/:id" element={<ItemListContainer/>} />
        <Route exact path="/item/:id" element={<ItemDetailContainer/>} />
      </Routes>    
    </BrowserRouter>
      
  )
}

export default App
