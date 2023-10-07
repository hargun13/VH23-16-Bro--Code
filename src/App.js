import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./FirebaseAuthContext/AuthContext";


import Sidebar from './components/Sidebar';
import Login from './login_signup/Login';
import Signup from './login_signup/Signup';
import Community from './user/CommunitySection/Community';
import EngineeringCommunity from './user/CommunitySection/EngineeringCommunity';
import VideoCall from './user/CommunitySection/VideoCall';
import Education from './user/Education/Education';
import BlogsPage from './user/Education/Blog/BlogsPage';
import VideosPage from './user/Education/Videos/VideosPage';
import Scholarships from './user/Scholarships/Scholarship'
import GovScehems from './user/GovSchemes/GovScehems';
import UserProfile from './user/UserMain/UserProfile';
import Fundraiser from './user/Fundraiser/Fundraiser';
import FindSponsor from './user/Sponsor/FindSponsor';
import ScholarshipCalculator from './user/AidCalculator/ScholarshipCalculator';
import ApplicationTracker from './user/ApplicationTracker/ApplicationTracker';
import ScholarshipList from './user/ApplicationTracker/ScholarshipList';
import UserDashboard from './user/UserDashboard/UserDashboard';
import EssayBuilder from './user/EssayBuilder/EssayBuilder';

import CreateSponsorShip from './SponsorSide/CreateSponsorShip';
import FundStudents from './SponsorSide/FundStudents';

import Analytics from './admin/Analytics';
import Verification from './admin/Verification';



const Chat = ({setUser}) => {
  useEffect(() => {
    (function (d, m) {
      var kommunicateSettings = {
        appId: '3996ff78f04c2d423784aef0e837f53d3',
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = 'https://widget.kommunicate.io/v2/kommunicate.app';
      var h = document.getElementsByTagName('head')[0];
      h.appendChild(s);
      window.kommunicate = m;
      m._globals = kommunicateSettings;
      setUser(true)
    })(document, window.kommunicate || {});
  }, []);

  return <div></div>;
};



function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {}, [user]);



  return (
    <div className=" h-full w-full scrollbar-hide">
      <AuthContextProvider>

      {user && <Sidebar setUser={setUser} />}
      <Routes>
        <Route path='/login' element={<Login setUser={setUser}/>} />
        <Route path='/signup' element={<Signup setUser={setUser}/>} />
        <Route path='/community' element={<Community />} />
        <Route path='/community/engineering-community' element={<EngineeringCommunity/>} />
        <Route path='/education' element={<Education />} />
        <Route path='/blog' element={<BlogsPage />} />
        <Route path='/edvideo' element={<VideosPage />} />
        <Route path='/scholarships' element={<Scholarships />} />
        <Route path='/schemes' element={<GovScehems />} />
        <Route path='/patientprofile' element={<UserProfile />} />
        <Route path='/fundraiser' element={<Fundraiser />} />
        <Route path='/find-scholarship' element={<FindSponsor />} />
        <Route path='/aid-calculator' element={<ScholarshipCalculator />} />
        <Route path='/applicationTracker' element={<ApplicationTracker />} />
        <Route path='/appliedList' element={<ScholarshipList />} />
        <Route path='/userdashboard' element={<UserDashboard />} />
        <Route path='/essaybuilder' element={<EssayBuilder />} />


        <Route path='/create-scholarship' element={<CreateSponsorShip />} />
        <Route path='/fund-students' element={<FundStudents />} />
        
        

        <Route path='/analytics' element={<Analytics />} />
        <Route path='/verification' element={<Verification />} />


          <Route path="/analytics" element={<Analytics />} />
          <Route path="/verification" element={<Verification />} />

      </Routes>
      {user && <Chat setUser={setUser} />}

      </AuthContextProvider>
    </div>
  );
}

export default App;
