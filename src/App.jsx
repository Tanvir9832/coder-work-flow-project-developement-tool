
import { RouterProvider } from 'react-router-dom'
import './App.css'
import allRouter from './Routers/AllRouters'

function App() {

  return (
    <div>
      <RouterProvider router={allRouter}></RouterProvider>
    </div>

  )
}

export default App
