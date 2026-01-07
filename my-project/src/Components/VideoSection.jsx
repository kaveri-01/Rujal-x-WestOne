import { useRef, useState } from "react";

export default function VideoSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="w-full bg-black">
      <div className="relative w-full h-[70vh]">

        {/* VIDEO */}
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          muted
          loop
          playsInline
        >
          {/* 🔗 ONLINE SAMPLE VIDEO */}
          <source
            src="https://cdn.coverr.co/videos/coverr-fashion-model-walking-7572/1080p.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/30" />

        {/* CONTENT */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-white text-2xl md:text-4xl font-semibold mb-6">
            Watch Our Story
          </h2>

          <button
            onClick={handlePlayPause}
            className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition"
          >
            {isPlaying ? "Pause Video" : "Play Video"}
          </button>
        </div>

      </div>
    </section>
  );
}
