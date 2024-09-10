import './App.css'
import { Outlet } from 'react-router-dom'
import Banner from './components/banner'

function App() {

  return (
    <div className='w-screen h-screen'>
      <Banner />
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default App
