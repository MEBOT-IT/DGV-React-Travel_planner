import React,{useState,useEffect} from 'react';
import { useNavigate, useParams,Link } from 'react-router-dom';
import './PaymentPage.css'
import AmericanExpress from '../images/AmericanExpress.png'
import MasterCard from '../images/MasterCard.png'
import Visa from '../images/Visa.png'
import CityBank from '../images/CityBank.png'
import Wells from '../images/Wells.png'
import VerifiedVisa from '../images/VerifiedVisa.png'
import SafeKey from '../images/SafeKey.png'

const PaymentPage = () => {
  const { Net } = useParams();
  const history = useNavigate();
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleMakePayment = () => {
    // Assuming some payment logic here
    // If payment is successful, setPaymentSuccess(true)
    setPaymentSuccess(true);
  };

  useEffect(() => {
    if (paymentSuccess) {
      // alert('Payment successful!');
      // history('/');
       // Navigate to home page
    }
  }, [paymentSuccess, history]);
  return (
    <div id='paymentpg-all'>
      <div id='paymentpg-details'>
     <h3 id='totamt'>Total {Net} INR</h3><br/><br/>
     <ul>
      <span id='payp'>Payment</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span><img src={AmericanExpress} alt='ae' width='25px' height='25px'/></span>&nbsp;&nbsp;&nbsp;&nbsp;
      <span><img src={MasterCard} alt='mc' width='25px' height='25px'/></span>&nbsp;&nbsp;&nbsp;&nbsp;
      <span><img src={Visa} alt='V' width='25px' height='25px'/></span>&nbsp;&nbsp;&nbsp;&nbsp;
      <span><img src={CityBank} alt='cb' width='25px' height='25px'/></span>&nbsp;&nbsp;&nbsp;&nbsp;
      <span><img src={Wells} alt='V' width='25px' height='25px'/></span>&nbsp;&nbsp;&nbsp;&nbsp;
     </ul><br/>
     <form id='paymentFormPH'>
        <input type='text' name='NameOnCard' className='first2' placeholder='Name On Card *' required/><br/><br/>
        <input type='text' name='CardNumber' className='first2' placeholder='Card Number *' required/><br/><br/>
        <input type='text' name='ExpireDate' className='second2' placeholder='Expire Date *' required/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type='text' name='CCV' className='second2' placeholder='CCV *' required/><br/><br/><br/>
        <Link to='/success'><button id='mp' onClick={handleMakePayment}>Make Payment ₹{Net}</button></Link>
     </form><br/>
      <ul>
        <span id='VeriV'><img src={VerifiedVisa} alt='VVisa' width='100px' height='90px'/></span>
        <span id='VeriV'><img src={SafeKey} alt='Safe' width='100px' height='90px'/></span>
      </ul>
      </div>
    </div>
  );
};

export default PaymentPage;