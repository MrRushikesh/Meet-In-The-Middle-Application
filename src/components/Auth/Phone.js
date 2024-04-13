import './Phone.css';
import Header from '../Common/Header';
import { useState } from 'react';
import { Link } from 'react-router-dom';




function Phone(){


    const [phoneNumber, setPhoneNumber] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);

    return(
        <>
        {
            (!agreeTerms) ?
                (<Header/>) :
                (
                <div className="flex-container-21">
                    <div><p className="prev btn btn-primary ms-2"><i className="fa-solid fa-chevron-left"></i></p></div>
                    <div><Link to="/otp" className="next btn btn-primary me-2">NEXT</Link></div>
                </div>
            )
        }
        <div className="flex-container-22">
            <div className="flex-container-23">
                <div className="icon">
                    <img src="https://i.ibb.co/3YnGGYM/phone-In-Hand.png" width="100%" height="100%" alt="icon"/>
                </div>

                <div className="lable-text">
                    <p className="label-text-1">Enter Your Mobile Number</p>
                    <p className="label-text-2">We need to send you confirmation code to get started</p>
                </div>

                <div className="phone-text">
                    <input type="text" placeholder="(+ 91)" value={phoneNumber} onChange={(e) => {setPhoneNumber(e.target.value)}}/>
                </div>

                <div className="term-condition">
                <input type="checkbox" checked={agreeTerms} onChange={(e) => {setAgreeTerms(e.target.checked)}} /><label>&nbsp; &nbsp;By continuing you agree to Terms and Conditions</label>
                </div>
            </div>
        </div>
        </>
    )
}

export default Phone;