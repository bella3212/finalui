import React, { useState, useRef } from 'react';
// https://www.npmjs.com/package/react-multiple-audio-player?activeTab=readme
const Player = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const videoRef = useRef(null);

    const togglePlay = () => {
    if (isPlaying) {
    videoRef.current.pause();
    } else {
    videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
    };

    const handleProgress = () => {
    const duration = videoRef.current.duration;
    const currentTime = videoRef.current.currentTime;
    const progress = (currentTime / duration) * 100;
    setProgress(progress);
    };
    // amr-player.js


const Howl = require('howler').Howl;

const sound = new Howl({
  src: ['../videos/amr.amr']
});

function playSound() {
    console.log("pppppppppppppppppp")
    console.log(sound)
  sound.play();
}



return (
    
    <div>


        {/* <script src="howler.js"></script>
        <script src="amr-player.js"></script>
        <button onClick={playSound}/>
      */}



        <video
            onTimeUpdate={handleProgress}
            ref={videoRef}
            width="100%"
            height="100%"
            controls
            >
            <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" /> 
            {/* <source src='video.3gp' type='video/3gpp; codecs="mp4v.20.8, samr"'></source> */}
         </video>
        <div>
        <button onClick={togglePlay}>
        {isPlaying ? "Pause" : "Play"}
        </button>
        <progress value={progress} max="100" />
        </div>
    </div>
)
}

export default Player;