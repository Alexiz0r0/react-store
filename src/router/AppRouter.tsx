import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../view/Home';
import Details from '../view/Details';
import Cart from '../view/Cart';
import NotFound from '../view/NotFound';
import OnSale from '../view/OnSale';

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='home' element={<Home />} />
        <Route path='cart' element={<Cart />} />
        <Route path='sale' element={<OnSale />} />
        <Route path='details/:id' element={<Details />} />
        <Route path='/' element={<Navigate to='home' />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRouter;
