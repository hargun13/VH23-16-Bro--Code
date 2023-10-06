import React from 'react'

const VideoCall = () => {
  return (
    <div>

        <p className="text-xl px-10 py-5 font-extrabold">Live Session - Engineering Community</p>

        <iframe
        src="https://whereby.com/developers-scholarship-portal"
        allow="camera; microphone; fullscreen; speaker; display-capture"
        className="w-full h-[86vh] ease-in-out"
        title="videocall"
        >
        </iframe>

    </div>
  )
}

export default VideoCall