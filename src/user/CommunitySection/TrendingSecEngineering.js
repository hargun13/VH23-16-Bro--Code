import React from 'react'
import { Button } from '@mui/material'

const TrendingSecEngineering = () => {
  return (
    <div className='p-8 h-screen overflow-y-scroll scrollbar-hide'>

        {/* who to follow */}
        <div className='bg-[#15181C] p-10 rounded-2xl text-white mt-3'>
            <p className='text-2xl font-semibold'>Who to follow</p>

            <div className='mt-5 mb-8 flex items-center justify-around w-full'>
                <div className='w-[85%] flex items-center justify-start gap-5'>  

                    <img src='https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' alt='random' className='h-16 w-16 rounded-2xl' /> 

                    <div >
                        <p>Creatives Community</p>
                        <p>@artists</p>
                    </div>
                    
                </div>
                <Button variant="contained" style={{marginRight:"10px"}}>Explore</Button>
                <Button variant="contained">Follow</Button>
            </div>

            <div className='mt-5 mb-8 flex items-center justify-around w-full'>
                <div className='w-[85%] flex items-center justify-start gap-5'>  

                    <img src='https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' alt='random' className='h-16 w-16 rounded-2xl' /> 

                    <div >
                        <p>Management Community</p>
                        <p>@managers</p>
                    </div>
                    
                </div>
                <Button variant="contained" style={{marginRight:"10px"}}>Explore</Button>
                <Button variant="contained">Follow</Button>
            </div>

            <div className='mt-5 mb-8 flex items-center justify-around w-full'>
                <div className='w-[85%] flex items-center justify-start gap-5'>  

                    <img src='https://images.unsplash.com/photo-1593115057322-e94b77572f20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80' alt='random' className='h-16 w-16 rounded-2xl' /> 

                    <div >
                        <p>Law Community</p>
                        <p>@lawyers</p>
                    </div>
                    
                </div>
                <Button variant="contained" style={{marginRight:"10px"}}>Explore</Button>
                <Button variant="contained">Follow</Button>
            </div>


            <Button>Show More... </Button>
        </div>

       
    </div>
  )
}

export default TrendingSecEngineering