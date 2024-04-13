import { useEffect, useState } from 'react';
import './OTPScreen.css';
import Header from '../Common/Header';
import { Link } from 'react-router-dom';


function OTPScreen() {

    const [otp, setOpt] = useState('');
    const [timer, setTimer] = useState(60);
   


    useEffect(() => {
        if(timer > 0){
            setTimeout(() => {
                setTimer(timer - 1)
            },1000)
        }
    },[timer])


    const handleResend = () => {
        setTimer(60);
    }


    


    return (
        <>
            {
                (otp === "")?
                    (<Header/>):
                    (
                    <div className="flex-container-21">
                        <div><Link to="/phone" className="prev btn btn-primary ms-2"><i className="fa-solid fa-chevron-left"></i></Link></div>
                        <div><Link to="/home" className="next btn btn-primary me-2">NEXT</Link></div>
                    </div>
                )
            }
           
            <div className="flex-container-32">
                <div className="flex-container-33">
                    <div className="icon-otp">
                        <img src="https://i.ibb.co/3YnGGYM/phone-In-Hand.png" width="100%" height="100%" alt="icon" />
                    </div>

                    <div className="lable-otp">
                        <p className="label-text-1">Enter OTP send to your mobile</p>
                    </div>

                    <div className="otp-container">
                        <div id="inputs" className="inputs">
                            <input className="input" type="text" inputMode="numeric" maxLength="1" />
                            <input className="input" type="text" inputMode="numeric" maxLength="1" />
                            <input className="input" type="text" inputMode="numeric" maxLength="1" />
                            <input className="input" type="text" value={otp} onChange={(e) => setOpt(e.target.value)} inputMode="numeric" maxLength="1" />
                        </div>
                    </div>

                    <div className="term-condition">
                        <p>{(timer > 0) ? (<button className="resend-btn text-secondary" disabled>Resend</button>) : (<button className="resend-btn text-primary" onClick={handleResend}>Resend</button>)} the OTP in {timer} second</p>
                    </div>
                </div>
            </div>
        </>
    )
}


export default OTPScreen;