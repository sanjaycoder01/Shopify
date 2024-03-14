import React from "react";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player";

const VIDEO_PATH = "https://www.youtube.com/watch?v=hHqW0gtiMy4";

const VideoPlayer = () => {
  const isPlaying = useSelector((store) => store.video.isPlaying);

  return (
    <div className="mx-[400px] mt-[100px]">
      {isPlaying && <ReactPlayer url={VIDEO_PATH} controls={true} />}
    </div>
  );
};

export default VideoPlayer;
