import React from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

interface PlayPauseButtonProps {
  isPlaying: boolean;
  onToggle: () => void;
}

const PlayPauseButton: React.FC<PlayPauseButtonProps> = ({ isPlaying, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      aria-label={isPlaying ? 'Pause video' : 'Play video'}
      className="p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
    >
      {isPlaying ? <FaPause size={24} color="white" /> : <FaPlay size={24} color="white" />}
    </button>
  );
};

export default PlayPauseButton;
