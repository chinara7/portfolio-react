import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './component/Navbar.jsx'
import Header from './component/Header.jsx'
import Services from './component/Services';
//import AboutMe from './component/AboutMe.jsx'

function App() {
  return (
    <div className='container-fluid'>
      <Navbar />
      <Header />
      <Services />
    </div>
  );
}

export default App;
