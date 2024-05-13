import Home from './components/home/Home.jsx';
import Users from './components/users/Users.jsx'
import Register from './components/register/Register.jsx';

import { BrowserRouter,Route, Routes } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Home />} />     
       
        <Route path = '/register' element = {<Register />} />   
        <Route path = '/users' element = {<Users />} />   
      </Routes>
    </BrowserRouter>
  )
}

export default App
