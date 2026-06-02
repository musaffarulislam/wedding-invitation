"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function SoundController() {
  const [isMuted, setIsMuted] = useState(false); // false = unmute by default
  const [showMutedIcon, setShowMutedIcon] = useState(true); // true = show muted icon
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio("/assets/nafla_song.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.2;

    // Try to autoplay
    audioRef.current.play()
      .then(() => {
        setShowMutedIcon(false); // Show unmuted icon since playing
      })
      .catch(() => {
        // Autoplay blocked - show muted icon
      });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleSound = () => {
    if (audioRef.current) {
      if (showMutedIcon) {
        // Currently showing muted - try to play
        audioRef.current.play().catch(() => {});
        setShowMutedIcon(false);
        setIsMuted(false);
      } else {
        // Currently playing - mute it
        audioRef.current.pause();
        setShowMutedIcon(true);
        setIsMuted(true);
      }
    }
  };

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleSound}
      className="fixed top-4 left-4 z-50 w-12 h-12 rounded-full bg-rose-500/90 backdrop-blur-sm shadow-lg flex items-center justify-center"
      title={showMutedIcon ? "Play Music" : "Mute Music"}
    >
      {showMutedIcon ? (
        // Show muted icon (with slash)
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <line x1="23" y1="9" x2="17" y2="15" />
          <line x1="17" y1="9" x2="23" y2="15" />
        </svg>
      ) : (
        // Show unmuted icon with sound waves
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
          </svg>
          {/* Animated sound waves */}
          <div className="absolute -bottom-1 left-1/2 flex gap-0.5 -translate-x-1/2">
            <motion.div
              animate={{ height: [4, 8, 4] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="w-0.5 bg-white rounded-full"
            />
            <motion.div
              animate={{ height: [6, 10, 6] }}
              transition={{ duration: 0.5, repeat: Infinity, delay: 0.1 }}
              className="w-0.5 bg-white rounded-full"
            />
            <motion.div
              animate={{ height: [4, 8, 4] }}
              transition={{ duration: 0.5, repeat: Infinity, delay: 0.2 }}
              className="w-0.5 bg-white rounded-full"
            />
          </div>
        </div>
      )}
    </motion.button>
  );
}