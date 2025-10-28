import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    // <div>App</div>
    <>
    <ToastContainer 
  position="top-right"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
/>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App