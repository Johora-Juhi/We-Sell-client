import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes/Routes';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className='container mx-auto'>
      <RouterProvider router={router} />
      <ToastContainer/>
    </div>
  );
}

export default App;
