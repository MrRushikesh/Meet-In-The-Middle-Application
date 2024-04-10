import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Header from "./components/Common/Header";
import Landing from "./components/Auth/Landing";
import SignUp from "./components/Auth/SignUp";
import SignIn from "./components/Auth/SignIn";
import OTPScreen from "./components/Auth/OTPScreen";
import Home from "./components/Home/Home";
import MyMeetingList from "./components/Home/MyMeetingsList";
import InvitationList from "./components/Home/InvitationList";
import CreateMeeting from "./components/Home/CreateMeeting";
import UserProfile from "./components/Home/UserProfile";
import MeetingDetails from "./components/Meeting/MettingDetails";


function App (){
    return(
        <>
        <Router>
            <div className="App">
                <Header/>
                <Routes>
                    <Route path="/" element={<Landing/>}></Route>
                    <Route path="/signup" element={<SignUp/>}></Route>
                    <Route path="/signin" element={<SignIn/>}></Route>
                    <Route path="/otp" element={<OTPScreen/>}></Route>
                    <Route path="/home" element={<Home/>}></Route>
                    <Route path="/mymeetings" element={<MyMeetingList/>}></Route>
                    <Route path="/invitations" element={<InvitationList/>}></Route>
                    <Route path="/createmeeting" element={<CreateMeeting/>}></Route>
                    <Route path="/userprofile" element={<UserProfile/>}></Route>
                    <Route path="/meeting/:id" element={<MeetingDetails/>}></Route>
                </Routes>
            </div>
        </Router>
        </>
    )
}


export default App;