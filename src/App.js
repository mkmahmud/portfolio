import logo from './logo.svg';
import './App.css';
import Router from './Routes/Router/Router';
import 'flowbite';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App max-w-screen-2xl mx-auto bg-[#00092C] text-white">
      <Router></Router>
      <ToastContainer />
    </div>
  );
}

export default App;
