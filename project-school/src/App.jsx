import Home from './components/home/Home.jsx';
import Register from './components/register/Register.jsx';
import Events from './components/events/Events.jsx';
import CreateEvents from './components/createEvents/CreateEvents.jsx';
import Users from './components/users/Users.jsx'
import Login from './components/login/Login.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx'
import Class from './components/class/Class.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/events' element={<Events />} />
        <Route path='/createEvents' element={<CreateEvents />} />    
        <Route path = '/login' element = {<Login/>} />  
        <Route path = '/users' element = {<Users />} />
        <Route path='/dashboard' element={<Dashboard />} />   
        <Route path='/class' element={<Class />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
