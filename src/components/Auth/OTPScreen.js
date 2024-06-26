import { useEffect, useState } from 'react';
import './OTPScreen.css';
import Header from '../Common/Header';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


function OTPScreen() {

    const [otp, setOpt] = useState(['','','','']);//array to hold each digit of OTP
    const [timer, setTimer] = useState(60);
    const [resendOtp, setResentOtp] = useState(false);
    // console.log(resendOtp)
    const navigate = useNavigate();

    const firstName = sessionStorage.getItem('firstName');
    const lastName = sessionStorage.getItem('lastName');
    const profilePic = sessionStorage.getItem('imageUrl');
    const phoneNumber = sessionStorage.getItem('phoneNumber');





    useEffect(() => {
        if(timer > 0){
            setTimeout(() => {
                setTimer(timer - 1)
            },1000)
        }
    },[timer])


    const handleResend = async() => {
        setTimer(60);
        try{

            const response = await axios.post('http://localhost:5000/api/otp/sendotp',{
                phoneNumber : phoneNumber
            })
            alert("OTP sent successfully to you'r mobile number....")
            console.log(response.data);
            setResentOtp(true);

            // fetch('http://localhost:5000/api/otp/sendotp',{
            //     method:'POST',
            //     body:JSON.stringify({
            //         phoneNumber : phoneNumber
            //     }),
            //     headers : {
            //         "content-type" : "application-json"
            //     }
            // })
            // .then(() =>{
            //     alert("OTP sent successfully...")
            //     setOtpSent(true);
            // })
            // .catch((error) => {
            //     console.log("Error while sending OTP...")
            // })
           

        }catch(error){
            console.error("Failed to send OTP : ", error);
        }
    }

    const handleInputChange = (index, value) => {
        const updateOTP = [...otp];
        updateOTP[index] = value;
        setOpt(updateOTP);
    }


    const handleVerifyOTP = async() => {
        try{
            const userEnteredOTP = otp.join('');
            console.log(userEnteredOTP)
            const response = await axios.post('http://localhost:5000/api/otp/verifyotp',{
                phoneNumber : phoneNumber,
                otp : userEnteredOTP
            });
            let verify = response.data.payload.valid;
            if(verify){
               if(firstName === null || lastName === null){
                     alert("✅ OTP Verified successfully.");
                     navigate('/home');
               }else{
                    alert("✅ User registred successfully.");
                    const resp = await axios.post('http://localhost:5000/api/auth/signup',{
                        firstName : firstName,
                        lastName : lastName,
                        phoneNumber : phoneNumber,
                        profilePic : profilePic
                    })
                    navigate('/signin');
               }
            }
                

        }catch(error){
            alert("🚫 Invalid OTP, Please, enter correct OTP...");
            console.log('Failed to Verify OTP : ', error.response.data)
        }
    }

    


    return (
        <>
            {
                (otp[3] === "")?
                    (<Header/>):
                    (
                    <div className="flex-container-21">
                        <div><Link to="/signin" className="prev btn btn-primary ms-2"><i className="fa-solid fa-chevron-left"></i></Link></div>
                        <div><p className="next btn btn-primary me-2" onClick={handleVerifyOTP}>NEXT</p></div>
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
                            <input className="input" type="text" inputMode="numeric" maxLength="1" onChange={(e) => handleInputChange(0, e.target.value)}/>
                            <input className="input" type="text" inputMode="numeric" maxLength="1" onChange={(e) => handleInputChange(1, e.target.value)}/>
                            <input className="input" type="text" inputMode="numeric" maxLength="1" onChange={(e) => handleInputChange(2, e.target.value)}/>
                            <input className="input" type="text" inputMode="numeric" maxLength="1" onChange={(e) => handleInputChange(3, e.target.value)}/>
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