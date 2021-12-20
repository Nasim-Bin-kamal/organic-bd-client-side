import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
import About from './pages/About/About';
import AddProducts from './pages/AddProducts/AddProducts';
import AddReview from './pages/AddReview/AddReview';
import Contact from './pages/Contact/Contact';
import Dashboard from './pages/Dashboard/Dashboard';
import DashboardHome from './pages/DashboardHome/DashboardHome';
import Home from './pages/Home/Home';
import ManageOrders from './pages/ManageOrders/ManageOrders';
import ManageProducts from './pages/ManageProducts/ManageProducts';
import MyOrders from './pages/MyOrders/MyOrders';
import Products from './pages/Products/Products';


function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} >
            <Route path="/dashboard" element={<DashboardHome />} />
            <Route path="/dashboard/manageOrders" element={<ManageOrders />} />
            <Route path="/dashboard/addProducts" element={<AddProducts />} />
            <Route path="/dashboard/manageProducts" element={<ManageProducts />} />
            <Route path="/dashboard/myOrders" element={<MyOrders />} />
            <Route path="/dashboard/addReview" element={<AddReview />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
