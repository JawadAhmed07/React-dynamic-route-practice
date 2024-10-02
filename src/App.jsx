import './App.css'
import Header from './component/header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './component/home'
import Products from './component/products'
import ProductsDetail from './component/productsdetail'
import '@fortawesome/fontawesome-free/css/all.min.css';


// import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/products/:id' element={<ProductsDetail/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
