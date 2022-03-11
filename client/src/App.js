import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Profile from './components/Profile'
import Register from './components/Register';
import Signin from './components/Signin';
import Page from './components/ErrorPage';


function App() {
  return (
    <div className='main'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/profile' element={<Profile></Profile>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/signin' element={<Signin></Signin>}></Route>
        <Route path='*' element={<Page></Page>}></Route>
      </Routes>

    </div>
  )
}

export default App;
