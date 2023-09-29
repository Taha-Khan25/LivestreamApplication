// LandingPage.js
import React from 'react';
import ReactPlayer from 'react-player';

const LandingPage = () => {
  const rtspUrl = 'http://streams.videolan.org/samples/vp8_webm/big-buck-bunny_trailer.webm'; 

  return (
    <div>
      <h1>Welcome to the Livestream App</h1>
      <ReactPlayer
        url={rtspUrl}
        controls={true} // Enable video controls (play, pause, volume)
        width="100%"
        height="80%"
      />
    </div>
  );
};

export default LandingPage;
