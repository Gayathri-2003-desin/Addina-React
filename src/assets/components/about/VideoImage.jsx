import React, { useState } from "react";

const VideoImage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="
        relative w-full h-[500px] rounded-lg bg-cover bg-center 
      "
      style={{ backgroundImage: "url('/images/about-video-image.jpg')" }}
    >
      {/* PLAY BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-24 h-24 bg-white rounded-full flex items-center justify-center
          shadow-lg cursor-pointer relative
        "
      >
        {/* Play Icon */}
        <svg width="32" height="32" viewBox="0 0 24 24" fill="black" className="z-10">
          <path d="M8 5v14l11-7z" />
        </svg>

        {/* Ripple Animation */}
        <span className="absolute inset-0 rounded-full bg-white opacity-30 animate-ping"></span>
      </button>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative w-[90%] max-w-3xl">
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-10 right-0 text-white text-3xl"
            >
              ✕
            </button>

            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/YkfPITD2C8Y?autoplay=1"
              title="YouTube video"
              allowFullScreen
              className="rounded-xl"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoImage;
