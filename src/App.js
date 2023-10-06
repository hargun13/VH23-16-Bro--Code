import React, {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom'
import { AuthContextProvider } from './FirebaseAuthContext/AuthContext';

import Sidebar from './components/Sidebar';
import Login from './login_signup/Login';
import Signup from './login_signup/Signup';
import Community from './user/CommunitySection/Community';
import Education from './user/Education/Education';
import BlogsPage from './user/Education/Blog/BlogsPage';
import VideosPage from './user/Education/Videos/VideosPage';
import Insurance from './user/Insurance/Insurance';
import GovScehems from './user/GovSchemes/GovScehems';
import PatientProfile from './user/UserMain/PatientProfile/PatientProfile';
// import FindDonor from './user/Donor/FindDonor';
// import DonorList from './user/Donor/DonorList';
import Fundraiser from './user/Fundraiser/Fundraiser';
// import DonateOrgan from './DonorSide/DonateOrgan';
import Analytics from './admin/Analytics';
import Verification from './admin/Verification';
// import VideoCall from './user/Donor/VideoCall';


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
        <Route path='/education' element={<Education />} />
        <Route path='/blog' element={<BlogsPage />} />
        <Route path='/edvideo' element={<VideosPage />} />
        <Route path='/insurance' element={<Insurance />} />
        <Route path='/schemes' element={<GovScehems />} />
        <Route path='/patientprofile' element={<PatientProfile />} />
        {/* <Route path='/finddonor' element={<FindDonor />} />
        <Route path='/donorlist' element={<DonorList />} /> */}
        <Route path='/fundraiser' element={<Fundraiser />} />
        {/* <Route path='/donateorgan' element={<DonateOrgan />} /> */}
        <Route path='/analytics' element={<Analytics />} />
        <Route path='/verification' element={<Verification />} />
        {/* <Route path='/meeting' element={<VideoCall />} /> */}
      </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
