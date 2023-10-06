import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';
// import ScholarshipRecommendations from './ScholarshipRecommendations'; // Import your recommendations component

const FindSponsor = () => {
  const [loading, setLoading] = useState(false);
  const [showRecommendations, setShowRecommendations] = useState(false);

  const handleRecommendationClick = () => {
    setLoading(true);

    // Simulate data processing for 10 seconds
    setTimeout(() => {
      setLoading(false);
      setShowRecommendations(true);
    }, 10000);
  };

  return (
    <div className='w-full'>
      <h1 className='text-4xl px-10 py-5 bg-blue-200'>
        Personalized Scholarship Recommender
      </h1>
      <p className='px-10 pt-2'>
        Please fill out the required fields to get a recommendation...
      </p>

      {loading && (
        <div className='w-full flex items-center justify-center mt-5'>
          <LinearProgress className='w-full'/>
        </div>
      )}

      {!showRecommendations ? (
        <div className='px-10 flex items-center justify-around py-5 w-[100%] '>
          {/* Your input fields go here */}
          <div className='px-10 flex items-center justify-around py-5 w-full'>
          <div className='flex flex-col items-center justify-around gap-16'>
            <TextField id="outlined-basic" label="Desired Country" variant="outlined"/>
            <TextField id="outlined-basic" label="Degree" variant="outlined"/>
            <TextField id="outlined-basic" label="Achievements" variant="outlined"/>
          </div>
          <div className='flex flex-col items-center justify-around gap-16'>
            <TextField id="outlined-basic" label="Extracurricular" variant="outlined"/>
            <TextField id="outlined-basic" label="Volunteer" variant="outlined"/>
            <TextField id="outlined-basic" label="No of LORs" variant="outlined" type='number'/>
          </div>
          <div className='flex flex-col items-center justify-around gap-16'>
            <TextField id="outlined-basic" label="Research Work" variant="outlined"/>
            <TextField id="outlined-basic" label="Desired Course" variant="outlined"/>
            <TextField id="outlined-basic" label="Referrals" variant="outlined" type="number"/>
          </div>
        </div>
        </div>
      ) : (
        <>recommendations</>// <ScholarshipRecommendations /> // Display the scholarship recommendations component
      )}

      <div className='w-full flex items-center justify-center mt-10'>
        <Button
          style={{
            paddingLeft: '36px',
            paddingRight: '36px',
            paddingTop: '12px',
            paddingBottom: '12px',
          }}
          className=' text-white text-xl font-bold flex items-center justify-center gap-5  group '
          variant='contained'
          onClick={handleRecommendationClick}
          disabled={loading}
        >
          {loading ? (
            <>
              <CircularProgress size={24} color="inherit" /> Processing
            </>
          ) : (
            'Recommend Scholarships'
          )}
        </Button>
      </div>
    </div>
  );
};

export default FindSponsor;
