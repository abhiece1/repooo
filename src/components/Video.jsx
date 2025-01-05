import React, { useState, useEffect, useRef } from 'react';

const Video = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRef = useRef(null);

  // Sample video data - replace URLs with your actual video URLs
  const videos = [
    {
      id: 1,
      url: 'https://www.worldquant.com/wp-content/uploads/2022/04/Cut_K.mp4',
      title: 'Video 1',
      description: 'Amazing first video description',
    },
    {
      id: 2,
      url: 'https://www.worldquant.com/wp-content/uploads/2022/04/Cut_L.mp4',
      title: 'Video 2',
      description: 'Engaging second video description',
    },
    {
      id: 3,
      url: 'https://www.worldquant.com/wp-content/uploads/2022/04/Cut_C.mp4',
      title: 'Video 3',
      description: 'Captivating third video description',
    },
    {
      id: 4,
      url: 'https://www.worldquant.com/wp-content/uploads/2022/04/Cut_P.mp4',
      title: 'Video 4',
      description: 'Fascinating fourth video description',
    },
    {
      id: 5,
      url: 'https://www.worldquant.com/wp-content/uploads/2022/04/Cut_O.mp4',
      title: 'Video 5',
      description: 'Stunning fifth video description',
    },
  ];

  useEffect(() => {
    // Handle video end and cycle to next video
    const handleVideoEnd = () => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    };

    const videoElement = videoRef.current;
    videoElement?.addEventListener('ended', handleVideoEnd);

    return () => {
      videoElement?.removeEventListener('ended', handleVideoEnd);
    };
  }, []);

  return (
    <div className="relative max-w-6xl mx-auto px-4 py-8">
      {/* Main Video Player */}
      <div className="relative w-full aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl mb-6">
        <video
          ref={videoRef}
          src={videos[currentVideo].url}
          className="w-full h-full object-cover"
          autoPlay
          muted
          playsInline
        />
        
        {/* Video Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
          <h2 className="text-white text-2xl font-bold mb-2">
            {videos[currentVideo].title}
          </h2>
          <p className="text-gray-200">
            {videos[currentVideo].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Video;
