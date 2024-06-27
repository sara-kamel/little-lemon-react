import './App.css';
import Header from './component/header';
import Footer from './component/footer';
import HomePage from './component/home-page';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
