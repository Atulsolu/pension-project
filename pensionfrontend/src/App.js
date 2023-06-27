import './App.css'; 
import Navbar from './Layout/Navbar';
import About from './Layout/About';
import Home from './Layout/Home';
import Contact from './Layout/Contact';
import Pensionerlogin from './Pages/Pensionerlogin';
import Signup from './Pages/Signup';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Admlogin from './Pages/Admlogin';
import Pensionerpage from './Pages/Pensionerpage';
import Adminpage from './Pages/Adminpage';
import AddBeneficary from './Pages/Beneficary/AddBeneficary';
import Pensioner from './Pages/Pensioner';
import Payment from './Pages/Payment/Payment';
import AddPlan from './Pages/Plans/AddPlan';
import Getpensioner from './Pages/Pensioner/Getpensioner';
import GetPayment from './Pages/Payment/GetPayment';
import GetPlan from './Pages/Plans/GetPlan';

function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={ <Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='signup' element={<Signup/>}/>
            <Route path='login' element={<Pensionerlogin/>}/>
            <Route path='pensionerpage' element={<Pensionerpage/>}/>
            <Route path='beneficary' element={<AddBeneficary/>}/>
            <Route path='admin' element={<Admlogin/>}/>
            <Route path='adminpage' element={<Adminpage/>}/>
            <Route path='pensioner' element={<Pensioner/>}/>
            <Route path='plan' element={<AddPlan/>}/>
            <Route path='payment' element={<Payment/>}/>
            <Route path='getpensioner' element={<Getpensioner/>}/>
            <Route path='getpayment' element={<GetPayment/>}/>
            <Route path='getplan' element={<GetPlan/>}/>

           


            
            
          </Route>
          </Routes>
          </Router>
          
    </>
  );
}

export default App;
