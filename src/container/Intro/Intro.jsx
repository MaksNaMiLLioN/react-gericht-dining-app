import React from "react";
import { meal } from "../../constants";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

import "./Intro.css";

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(true);
  const vidRef = React.useRef();

  return (
    <div className="app__intro">
      <div className="app__intro-video">
        <video
          src={meal}
          autoPlay
          loop
          type="video/mp4"
          controls={false}
          muted
          ref={vidRef}
        ></video>
      </div>
      <div className="app__intro-overlay flex__center">
        <div
          className="app__intro-controls flex__center"
          onClick={() => {
            setPlayVideo(!playVideo);
            if (playVideo) {
              vidRef.current.pause();
            } else {
              vidRef.current.play();
            }
          }}
        >
          {playVideo ? <BsPauseFill size={27} /> : <BsFillPlayFill size={27} />}
        </div>
      </div>
    </div>
  );
};

export default Intro;
