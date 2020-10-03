import React from 'react';
import logo from './logo.svg';
import imageInSrc from './Assets/imageInSrc.jpg';
import './style.css';
import './App.css';

function App() {
  return (

    <div className="App">
      <div style={{border:'solid 1px black',maxWidth:'100vw'}}>
        <h1 className="title red">Welcome</h1>
        <br/>
        <img className="container" src="/images/imageInPublic.jpg" alt="Quote" width="320" height="240"/>  
        <img src={imageInSrc} alt="hope" width="320" height="240"/>
      </div>
      <video width="320" height="240" controls>
      <source src="/video/video.mp4" type="video/mp4"/>
      {/* <track src="fgsubtitles_en.vtt" kind="subtitles" srclang="en" label="English"></track>  */}
      </video>

    </div>
  );
}

export default App;
