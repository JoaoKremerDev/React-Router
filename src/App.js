import './App.css';

//React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Components
import Navbar from  './Components/Navbar'

//Pages
import Home from './Pages/Home';
import About from './Pages/About';
import { Product }  from './Pages/Product';
import Info from './Pages/Info';
import NotFound from './Pages/NotFound';
import SearchForm from './Components/SearchForm';
import Search from './Pages/Search';


function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
      {/* Links com React Router */}
      <Navbar />
      <SearchForm />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/products/:id' element={<Product />} />
        <Route path='/products/:id/info' element={<Info />} />
        <Route path='/search' element={<Search />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
