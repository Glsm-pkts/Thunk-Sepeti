
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main';
import Card from './pages/Card';
import Restaurants from './pages/Restaurants';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCart } from './redux/actions/BasketActions';



const App = () => {
const dispatch = useDispatch();

  useEffect(() => {
dispatch(getCart())
  },[])

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
<Route path='/' element={<Main/>}/>
<Route path='/restaurant/:id' element={<Restaurants/>} />
<Route path='/cart' element={<Card/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
