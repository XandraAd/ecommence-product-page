import 'bootstrap/dist/css/bootstrap.min.css';
import NavBars from './components/NavBars';
import Routing from './components/Routing'
import './App.css'


function App() {
 return (
    <>
   <NavBars/>
   <div className=' mt-5 pt-3'>
   <Routing/>
   </div>

   
   </>
  )
}

export default App
