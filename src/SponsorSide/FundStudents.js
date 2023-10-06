import React from 'react'
import StudentCard from './StudentCard'

const FundStudents = () => {
  return (
    <div>
        <h1 className='text-3xl px-10 py-5'>Fund Students, Help The Talented Ones Grow</h1>
        <div className='flex h-full items-center justify-around my-10'>
            <StudentCard imagesrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" name="Emma Johnson"/>
            <StudentCard imagesrc="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" name="Liam Davis"/>
            <StudentCard imagesrc="https://plus.unsplash.com/premium_photo-1666265384842-31bdda25f026?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" name="Noah Anderson"/>
            <StudentCard imagesrc="https://plus.unsplash.com/premium_photo-1675034393381-7e246fc40755?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" name="Olivia Smith"/>
        </div>
    </div>
  )
}

export default FundStudents