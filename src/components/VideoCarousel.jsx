import React, { useState, useRef, useEffect } from "react";
import "../styles/VideoCarousel.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function VideoCarousel({ slug }) {
  const [width, setWidth] = useState(window.innerWidth);
  const settings = {
    className: width < 1296 ? "slider variable-width" : "",
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: width > 1296 ? 4 : 1,
    slidesToScroll: width > 1296 ? 3 : 2,
    variableWidth: width < 1296 ? true : false,
  };
  const [arr, setArr] = useState([
    {
      src: "https://d2omxbf10armxs.cloudfront.net/tdmw/salman.mp4",
      img: "https://storage.googleapis.com/test694/Images/Salman.webp",
      name: "Salman",
      prof: "Student",
    },
    {
      src: "https://d2omxbf10armxs.cloudfront.net/tdmw/Apeksha.mp4",
      name: "Apeksha",
      img: "https://storage.googleapis.com/test694/Images/Apeksha.webp",
      prof: "Student",
    },
    {
      src: "https://d2omxbf10armxs.cloudfront.net/tdmw/Naveen.mp4",
      name: "Naveen",
      prof: "Student",
      img: "https://storage.googleapis.com/test694/Images/Naveen.webp",
    },
    {
      src: "https://d2omxbf10armxs.cloudfront.net/tdmw/mern1.mp4",
      name: "Shadab Ahmed",
      prof: "Student",
      img: "https://storage.googleapis.com/test694/Images/Shadab.webp",
    },
    {
      src: "https://d2omxbf10armxs.cloudfront.net/tdmw/mern2.mp4",
      name: "Uttam",
      prof: "Student",
      img: "https://storage.googleapis.com/test694/Images/Uttam.webp",
    },
    {
      src: "https://d2omxbf10armxs.cloudfront.net/tdmw/mern3.mp4",
      name: "Ish Aggarwal",
      prof: "Student",
      img: "https://storage.googleapis.com/test694/Images/Ish.webp",
    },
    {
      src: "https://d2omxbf10armxs.cloudfront.net/tdmw/Python.mp4",
      name: "Arsh Pathak",
      prof: "Student",
      img: "https://storage.googleapis.com/test694/Images/Arsh.webp",
    },
    {
      src: "https://d2omxbf10armxs.cloudfront.net/tdmw/fmv.mp4",
      name: "Gaurav Chavda",
      prof: "Student",
      img: "https://storage.googleapis.com/test694/Images/Gaurav.webp",
    },
    {
      src: "https://d2omxbf10armxs.cloudfront.net/tdmw/datascience.mp4",
      name: "Shrinath Padvane",
      prof: "Student",
      img: "https://storage.googleapis.com/test694/Images/Srinath.webp",
    },
  ]);
  const [play, setPlay] = useState(arr.length);
  useEffect(() => {
    if (slug) {
      if (slug == "mernstack" || slug == "fullstackdevelopment") {
        setArr([...arr.slice(3, arr.length), ...arr.slice(0, 3)]);
      } else if (slug == "datascientist" || slug == "datascience") {
        setArr([...arr.slice(8, 9), arr[6], ...arr.slice(0, 6), arr[7]]);
      } else if (slug == "financialmodelling") {
        setArr([...arr.slice(7, 8), ...arr.slice(0, 7), arr[8]]);
      } else if (slug == "python" || slug == "pythondevelopment") {
        setArr([...arr.slice(6, 7), ...arr.slice(0, 6), ...arr.slice(7)]);
      }
    }
    window.addEventListener("resize", (e) => {
      setWidth(window.innerWidth);
    });
  }, []);
  return (
    <>
      <div className="video-carousel">
        <h2 className="section-heading text-center video-carousel-heading">
          Video Reviews from <b className="text-golden ">Our Students!</b>
        </h2>
        <div className="slider-container">
          <Slider {...settings}>
            {arr.map((item, idx) => (
              <VideoComp
                img={item.img}
                src={item.src}
                name={item.name}
                prof={item.prof}
                play={play}
                key={idx}
                idx={idx}
                setPlay={setPlay}
              />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default VideoCarousel;

const VideoComp = ({ src, name, prof, play, idx, setPlay, img }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    const videoElement = document.getElementById(`video-carousel-video-${idx}`);

    // Pause the currently playing video if a new video is clicked
    if (isPlaying) {
      videoElement?.pause();
      setIsPlaying(false);
    } else {
      // Pause the previous video and play the new one
      document.getElementById(`video-carousel-video-${play}`)?.pause();
      videoElement?.play();
      setIsPlaying(true);
      setPlay(idx); // Set the current video as the one that's playing
    }
  };
  const handleVideoLoaded = () => {
    // Trigger the video to autoplay when it has loaded
    if (play === idx) {
      const videoElement = document.getElementById(
        `video-carousel-video-${idx}`
      );
      videoElement?.play();
    }
  };

  useEffect(() => {
    // Reset the playing state when the play index changes
    if (play !== idx) {
      setIsPlaying(false);
    }
  }, [play, idx]);

  return (
    <div className="video-carousel-card">
      <div className="video-carousel-video-box">
        {/* Show image if video is not playing */}
        {!isPlaying && (
          <img
            src={img}
            alt={name}
            className="video-carousel-video"
            onClick={handlePlayPause}
          />
        )}

        {/* Show video if it is playing */}
        {isPlaying && (
          <video
            className="video-carousel-video"
            id={`video-carousel-video-${idx}`}
            src={src}
            controls
            onLoadedData={handleVideoLoaded}
            onPause={() => {
              setIsPlaying(false);
            }}
          />
        )}
      </div>
      <div className="video-carousel-name">{name}</div>
      <div className="video-carousel-profession">{prof}</div>
    </div>
  );
};
