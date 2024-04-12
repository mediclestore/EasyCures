import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import {  Outlet, createBrowserRouter } from 'react-router-dom';

import Checkout from './components/Checkout';
import Error from './components/Error';
import Login from './components/Login';
import { useEffect } from 'react';
import {auth} from './firebase'

import {  useDispatch } from 'react-redux';
import { set_user } from './utils/CartSlice';
import { loadStripe, } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import ValueCart from './components/ValueCart';
import BlogPage from './components/BlogPage';
import Contact from './components/Contact';
import AboutUs from './components/About';
import Offers from './components/Offers';
import Footer from './components/Footer';
import TermsAndConditions from './components/Terms';


function App() {
  const dispatch=useDispatch();
 


 useEffect(()=>{
    
    auth.onAuthStateChanged(authUser=>{
    console.log('The user is >>>>', authUser)
    if (authUser){
      //the user just logged in/the user was logged i
    
      dispatch(set_user(authUser))
    }else{
      //user logged out
      dispatch(set_user(''))
    }
  })
 },[]);
  return (
    <div className="App">
      
        <Header />
        <Outlet />
        <Footer />
    
      

      {/*Header Component */}
      {/*Home Component */}
    </div>
  );
}


export const appRouter=createBrowserRouter([
  {
    path: '/',
    element:<App />,
    errorElement:<Error />,
    children: [
      {
        path: '/',
        element:<Home />,
        errorElement:<Error />,
      },
      {
        path: '/checkout',
        element:<Checkout />,
        errorElement:<Error />,
    
      },
      {
        path: '/login',
        element:<Login />,
        errorElement:<Error />,
    
      },
      {
        path: '/offers',
        element:<Offers />,
        errorElement:<Error />,
    
      },
      {
        path: '/valuecart',
        element:<ValueCart />,
        errorElement:<Error />,
    
      },
      {
        path: '/blog',
        element:<BlogPage />,
        errorElement:<Error />,
    
      },
      {
        path: '/contact',
        element:<Contact />,
        errorElement:<Error />,
    
      }, {
        path: '/about',
        element:<AboutUs />,
        errorElement:<Error />,
    
      },
      {
        path: '/terms',
        element:<TermsAndConditions />,
        errorElement:<Error />,
    
      },

    ]

  },
  
])




export default App;
