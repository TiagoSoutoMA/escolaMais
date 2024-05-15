import Home from './components/home/Home.jsx';
<<<<<<< HEAD
import Login from './components/login/Login.jsx';

=======
import Users from './components/users/Users.jsx'
>>>>>>> main
import Register from './components/register/Register.jsx';

import { BrowserRouter,Route, Routes } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Home />} />     
        <Route path = '/login' element = {<Login/>} />  
        <Route path = '/register' element = {<Register />} />   
        <Route path = '/users' element = {<Users />} />   
      </Routes>
    </BrowserRouter>
  )
}

export default App
