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
import Payment from './Pages/Payment/Payment';
import Getpensioner from './Pages/Pensioner/Getpensioner';
import GetPayment from './Pages/Payment/GetPayment';
import GetPlan from './Pages/Plans/GetPlan';
import GetPenPlan from './Pages/Plans/GetPenPlan';
import AddPlan from './Pages/Plans/AddPlan';
import GetBeneficary from './Pages/Beneficary/GetBeneficary';
import GetIndividual from './Pages/Pensioner/GetIndividual';
import UpdatePlan from './Pages/Plans/UpdatePlan';
import UpdateBeneficary from './Pages/Beneficary/UpdateBeneficary';
import UpdatePensioner from './Pages/Pensioner/UpdatePensioner';
import AdminNav from './Layout/AdminNav';
import PensionerNav from './Layout/PensionerNav';

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
            <Route path='admin' element={<Admlogin/>}/>
            </Route>
            <Route path='pensioner' element={<PensionerNav/>}/>
            <Route path='pensionerpage' element={<Pensionerpage/>}/>
            <Route path='beneficary' element={<AddBeneficary/>}/>
            <Route path='getbeneficary' element={<GetBeneficary/>}/>
            <Route path='updatebeneficary' element={<UpdateBeneficary/>}/>
            <Route path='getpenplan' element={<GetPenPlan/>}/>
            <Route path='getpayment' element={<GetPayment/>}/>
            <Route path='individualdetails' element={<GetIndividual/>}/>
            <Route path='updatedetails' element={<UpdatePensioner/>}/>
           
            <Route path='adminnav' element={<AdminNav/>}/>
            <Route path='adminpage' element={<Adminpage/>}/>
            <Route path='payment' element={<Payment/>}/>
            <Route path='getpensioner' element={<Getpensioner/>}/>
            <Route path='getplan' element={<GetPlan/>}/>
            <Route path='addplan' element={<AddPlan/>}/>
            <Route path='updateplan' element={<UpdatePlan/>}/>
            
            
            
          </Routes>
          </Router>
          
    </>
  );
}

export default App;
