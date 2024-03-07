import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Jana from './component/gyrate/Index'
import Index from './component/form/Index'
import Registration from './component/form/Registration'

function App() {

  return (
    <div className='.container'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Registration />} />
          <Route path='/form' element={<Index />}/>
          <Route path='/' element={<Jana />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App