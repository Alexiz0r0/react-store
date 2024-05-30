import Footer from './components/Footer';

import NavBar from './components/NavBar';

import './App.css';

import AppRouter from './router/AppRouter';

const App = () => {
  return (
    <>
      <NavBar />

      <main>
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
