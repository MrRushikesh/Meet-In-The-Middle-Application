import './SignIn.css';
import {Link} from 'react-router-dom';


function SignIn() {
    return (
        <>
            <div className="container flex-container-01">
                <div className="flex-container-02">
                    <div className="icon">
                        <img src="https://i.ibb.co/3YnGGYM/phone-In-Hand.png" width="100%" height="100%" alt="icon" />
                    </div>

                    <div className="profile-text">
                        <p className="label-text-1">Log In with Mobile Number</p>
                    </div>

                    <div className="firstName-text">
                        <input type="text" placeholder="Mobile Number" />
                    </div>

                    <div className="text-container">
                        <Link to="/otp">
                            <button className='signIn-btn'>Sign In</button>
                        </Link> 
                    </div>

                    <div className="text-container">
                        <Link to="/signup">
                            <button className='signIn-btn'>Sign Up</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn;