import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../view/Home';
import Details from '../view/Details';
import Cart from '../view/Cart';
import NotFound from '../view/NotFound';

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='home' element={<Home />} />
        <Route path='details/:id' element={<Details />} />
        <Route path='cart' element={<Cart />} />
        <Route path='/' element={<Navigate to='home' />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRouter;
