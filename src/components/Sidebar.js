import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box, IconButton} from "@mui/material";
import InputBase from "@mui/material/InputBase";
//icons
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import GavelIcon from '@mui/icons-material/Gavel';
import MicIcon from '@mui/icons-material/Mic';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import DomainVerificationIcon from '@mui/icons-material/DomainVerification';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PeopleIcon from '@mui/icons-material/People';
import CalculateIcon from '@mui/icons-material/Calculate';
import ChecklistIcon from '@mui/icons-material/Checklist';
import SchoolIcon from '@mui/icons-material/School';
//image
import logo from "../login_signup/edfund.io.png"

import { UserAuth } from '../FirebaseAuthContext/AuthContext';
// import Popup from 'reactjs-popup'
import SpeechRecognition, {
    useSpeechRecognition,
  } from "react-speech-recognition";

// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useRoleContext } from '../login_signup/roleContext'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: '#15181C',
  border: '1px solid ',
  boxShadow: 24,
  borderRadius: 10,
  color:'white',
  px: 4,
  py: 5
};




export default function Sidebar({setUser}) {
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const {role} = useRoleContext();

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const {logout} = UserAuth()
  const [error, setError] = useState()

  const handleLogout = async (e) => {
    e.preventDefault();
    setError('');
    try {
        await logout();
        setUser(false)
        setAnchorEl(null);
        navigate('/login')
      } 
      catch (e) {
        setError(e.message);
        console.log(error);
      }

  }

  const [open, setOpen] = useState(false);
  const handleVoiceNavOpen = () => setOpen(true);
  const handleVoiceNavClose = () => setOpen(false);

  const [redirectUrl, setRedirectUrl] = useState("");
    const commands = [
        {
        command: ["Go to * page", "Go to *", "Open * page", "Open *"],
        // callback: (redirectPage) => setRedirectUrl(redirectPage),
        callback: (redirectPage) => setRedirectUrl(encodeURIComponent(redirectPage)),
        },
    ];
    const { transcript } = useSpeechRecognition({ commands });

    useEffect(() => {
        if (redirectUrl) {
            navigate(`/${redirectUrl}`);
            setRedirectUrl(""); // Clear the redirectUrl after navigation
        }
    }, [redirectUrl, navigate])

    // const pages = ["community", "education", "blogs", "videos", "insurance", "schemes" ];
    // const urls = {
    //     community: "/community",
    //     education: "/education",
    //     blogs: "/blog",
    //     videos: "/edvideo",
    //     insurance: "/insurance",
    //     schemes: "/schemes",
    // };

    // if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    //     return null;
    // }

  
    const list = () => {
        if (role === 'user' || role === 'sponsor') {
          return (
            <div
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
              className='p-5  h-full'
              style={{ maxWidth: '300px' }}
            >
              <img src={logo} alt="intellihealth logo" className='w-[80%] h-auto'/>
              <List className='w-full'>

                {role === 'user' ? (
                  <ListItem className=''>
                    <Link to="/community">
                      <Button style={{ color: 'black' }}>
                        <HomeIcon className='mr-3'/>Dashboard
                      </Button>
                    </Link>
                  </ListItem>
                ) : role === 'sponsor' ? (
                  <ListItem className=''>
                    <Link to="/community">
                      <Button style={{ color: 'black' }}>
                        <HomeIcon className='mr-3'/>Dashboard
                      </Button>
                    </Link>
                  </ListItem>
                ) : (
                  <ListItem className=''>
                  <Link to="/community">
                    <Button style={{ color: 'black' }}>
                      <HomeIcon className='mr-3'/>Dashboard
                    </Button>
                  </Link>
                </ListItem>
                )}
                
                <ListItem className=''>
                  <Link to="/community">
                    <Button style={{ color: 'black' }}>
                      <PeopleIcon className='mr-3'/>Community
                    </Button>
                  </Link>
                </ListItem>

                {role === 'user' ? (
                  <div>
                    <ListItem className=''>
                      <Link to="/find-scholarship">
                        <Button style={{ color: 'black' }}>
                          <AttachMoneyIcon className='mr-3'/>Find a Scholarship
                        </Button>
                      </Link>
                    </ListItem>

                    <ListItem className=''>
                      <Link to="/aid-calculator">
                        <Button style={{ color: 'black' }}>
                          <CalculateIcon className='mr-3'/>Aid Calculator
                        </Button>
                      </Link>
                    </ListItem>

                    <ListItem className=''>
                      <Link to="/appliedList">
                        <Button style={{ color: 'black' }}>
                          <ChecklistIcon className='mr-3'/>Application Tracker
                        </Button>
                      </Link>
                    </ListItem>

                    <ListItem className=''>
                      <Link to="/education">
                        <Button style={{ color: 'black' }}>
                          <CastForEducationIcon className='mr-3'/>Education
                        </Button>
                      </Link>
                    </ListItem>

                    <ListItem className=''>
                      <Link to="/scholarships">
                        <Button style={{ color: 'black' }}>
                          <AccountBalanceIcon className='mr-3'/>Scholarships
                        </Button>
                      </Link>
                    </ListItem>
                  </div>
                ) : (
                  <div>
                    <ListItem className=''>
                      <Link to="/create-scholarship">
                          <Button style={{ color: 'black' }}>
                          <AttachMoneyIcon className='mr-3'/>Create Scholarship
                          </Button>
                      </Link>
                    </ListItem>
                    <ListItem className=''>
                      <Link to="/fund-students">
                          <Button style={{ color: 'black' }}>
                          <SchoolIcon className='mr-3'/>Fund Students
                          </Button>
                      </Link>
                    </ListItem>
                  </div>
                )}

                <ListItem className=''>
                  <Link to="/schemes">   
                    <Button style={{ color: 'black' }}>
                      <GavelIcon className='mr-3'/>Gov. Schemes
                    </Button>
                  </Link>
                </ListItem>

                <ListItem className=''>
                  <Link to="/fundraiser">   
                    <Button style={{ color: 'black' }}>
                      <VolunteerActivismIcon className='mr-3'/>Fundraiser
                    </Button>
                  </Link>
                </ListItem>

              </List>
            </div>
          );
        }else{
            return(
            <div
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
              className='py-5 px-2 h-full'
              style={{ maxWidth: '300px' }}
            >
              <img src={logo} alt="intellihealth logo" className='w-[80%] h-auto'/>
                <List>
                    <ListItem className=''>
                        <Link to="/analytics">   
                            <Button style={{ color: 'black' }}>
                              <AnalyticsIcon className='mr-3'/>Analytics
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem className=''>
                        <Link to="/verification">   
                            <Button style={{ color: 'black' }}>
                              <DomainVerificationIcon className='mr-3'/>Request Verification
                            </Button>
                        </Link>
                    </ListItem>
                </List>
                </div>
            )
        }
      };

      const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            autoDisplay: false
          },
          "google_translate_element"
        );
      };
      useEffect(() => {
        // Check if the script has already been loaded
        if (!window.googleTranslateElementInit) {
          var addScript = document.createElement("script");
          addScript.setAttribute(
            "src",
            "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          );
          document.body.appendChild(addScript);
          window.googleTranslateElementInit = googleTranslateElementInit;
        }
      }, []);
      
      
      

  return (
    <div className='w-full shadow-lg'>
      <Box display="flex" justifyContent="space-between" p={2}>
            <div className='flex items-center justify-center'>
                <Button onClick={toggleDrawer(true)}>
                    <MenuIcon color='black'/>
                </Button>
                <Drawer
                    anchor="left"
                    open={isDrawerOpen}
                    onClose={toggleDrawer(false)}
                
                >
                    {list()}
                </Drawer>
                <img src={logo} alt="intellihealth logo" className='h-[40px] w-[140px]'/>

                <div id="google_translate_element"></div>
            </div>

            {/* ICONS */}
            <Box display="flex" gap="8px">
                {/* SEARCH BAR */}
                <Box
                    display="flex"
                    border="1px solid black"
                    borderRadius="8px"
                    padding="2px"
                >
                    <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
                    <IconButton type="button" sx={{ p: 1 }}>
                        <SearchIcon />
                    </IconButton>

                    <IconButton onClick={handleVoiceNavOpen} type="button" sx={{ p: 1 }}>
                        <MicIcon />
                    </IconButton>

                    <Modal
                        open={open}
                        onClose={handleVoiceNavClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <h1 className=" text-center text-2xl 0">Voice Assisted Tab Navigation</h1>
                            <p className="my-16">Transcript: &nbsp;&nbsp;
                            <span className="text-white">{transcript}</span> </p>
                            <div className=" flex items-center justify-center">
                            <Button variant="contained" className="bg-[#4961e7] transition duration-300 hover:text-black px-5 py-2 rounded-full "
                            onClick={SpeechRecognition.startListening}>Start</Button>
                            </div>
                        </Box>
                    </Modal>

                    
                </Box>


                <IconButton>
                <NotificationsOutlinedIcon />
                </IconButton>

                <IconButton>
                <SettingsOutlinedIcon />
                </IconButton>

                {/* Profile dropdown */}
                <div>
                    
                    <IconButton onClick={handleClick}>
                        <PersonOutlinedIcon />
                    </IconButton>
                    
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <Link to="/patientprofile"><MenuItem onClick={handleClose}>Profile</MenuItem></Link>
                        <MenuItem onClick={handleClose}>My Account</MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                </div>
                
            </Box>
        </Box>
    </div>
  );
}
