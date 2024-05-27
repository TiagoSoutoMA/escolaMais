import Home from './components/home/Home.jsx';
import Register from './components/register/Register.jsx';
import Events from './components/events/Events.jsx';
import CreateEvents from './components/createEvents/CreateEvents.jsx';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/events' element={<Events />} />
        <Route path='/createEvents' element={<CreateEvents />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
