import React, {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom'
import { AuthContextProvider } from './FirebaseAuthContext/AuthContext';

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


import Analytics from './admin/Analytics';
import Verification from './admin/Verification';

function App() {
  const [user, setUser] = useState(false);
  useEffect(()=>{}, [user])  

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


        <Route path='/analytics' element={<Analytics />} />
        <Route path='/verification' element={<Verification />} />

        <Route path='/live-session' element={<VideoCall />} />

      </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
