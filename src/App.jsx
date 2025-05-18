import './App.css'
import { Route, Routes } from 'react-router-dom'
import Staff from './pages/staff/Staff'

function App() {

  return (
    <Routes>
      
      <Route path="/" element={<Staff />} />

    </Routes>
  )
}

export default App
