import Footer from './components/Footer';

import NavBar from './components/NavBar';

import './App.css';

import AppRouter from './router/AppRouter';
import '@sweetalert2/theme-dark/dark.css';

const App = () => {
  return (
    <>
      <NavBar />

      <main className='mx-auto max-w-[1220px]'>
        {/* <Home></Home> */}
        {/* <Details></Details> */}
        {/* <Cart></Cart> */}
        <AppRouter></AppRouter>
      </main>
      <Footer></Footer>
    </>
  );
};

export default App;
