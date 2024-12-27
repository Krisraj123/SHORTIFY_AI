import React, { useState } from 'react'
import { Thumbnail } from "@remotion/player";
import RemotionVideo from './RemotionVideo';
import PlayerLayout from './PlayerLayout';
import PlayerLayoutDash from './PlayerLayoutDash';
const VideoList = ({videoList}) => {
  const [openPlayer ,setOpenPlayer]=useState(false);
  const [videoId,setVideoId] = useState();


  return (
    <div className='mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4
    gap-10'>
      {videoList?.map((video,index)=>(

          <div key={index}className='cursor-pointer hover:scale-105 transition-all'
          onClick={()=>{setOpenPlayer(Date.now());setVideoId(video?.id);}}
          >
          <Thumbnail
            component={RemotionVideo}
            compositionWidth={250}
            compositionHeight={350}
            frameToDisplay={30}
            durationInFrames={120}
            fps={30}
            style={{
              borderRadius:15
            }}
            inputProps={{
              ...video,
              setDurationInFrame: (v)=>console.log(v)
            }}
          />
          </div>

      ))}
      <PlayerLayoutDash playVideo={openPlayer} videoId={videoId}/>
    </div>
  )
}

export default VideoList
