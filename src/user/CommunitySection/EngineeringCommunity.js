import React from 'react'
import TrendingSecEngineering from './TrendingSecEngineering'
import Post from './Post'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
const EngineeringCommunity = () => {
  return (
    <div className='flex items-start justify-center w-full h-full px-3 gap-2'>



      <div className='p-2 h-full w-[20%] flex flex-col items-center justify-center '>
        
      <img src='https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' alt='random' className='h-36 w-full rounded-xl' /> 

        <h1 className='text-3xl my-4'>Engineering Community</h1>
        <div className='flex items-center justify-around gap-2 my-3'>
            <Button variant="contained" style={{fontSize:"12px"}}>Follow</Button>
            <Link to="/live-session"><Button variant="contained" style={{fontSize:"12px"}}>Join Live</Button></Link>
            <p className='text-red-500 text-sm'>30 live...</p>
        </div>
        
        <div className='w-full overflow-y-scroll scrollbar-hide'>
            <p className='text-xs'>
                Welcome to the Engineering Community Hub! 🛠️<br/><br/>

                🌐 Stay Informed: Explore the latest industry trends, cutting-edge technologies, and engineering breakthroughs through insightful posts and articles.<br/><br/>

                🗣️ Engage in Discussions: Share your thoughts, ask questions, and participate in stimulating discussions on engineering topics that matter to you.<br/><br/>

                Join us today and be a part of the engineering revolution. 🌟 #EngineeringCommunity #Innovation #Collaboration #EngineeringExcellence<br/><br/>
            </p>
        </div>

      </div>  
      
      <div className='w-[40%] h-full border-r border-l  border-gray-700 flex flex-col items-center'>
        
        <div className='border-b text-3xl w-full p-5 shadow-lg'>New Posts</div>
        
        <div className='w-full h-screen overflow-y-scroll scrollbar-hide'>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>

      <div className='w-[40%] h-full'>
        <TrendingSecEngineering />
      </div>

    </div>
  )
}

export default EngineeringCommunity