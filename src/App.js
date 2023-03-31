import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages';
import SingleCocktail from './pages/SingleCocktail';
import NotFound from './pages/NotFound';
import Header from './components/Header';



function App()
{
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cocktail/:id' element={<SingleCocktail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
