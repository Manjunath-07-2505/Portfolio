import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import PlayPauseButton from "./PlayPauseButton";
import ParticleBackground from "./ParticleBackground";
import TechFloat from "./TechFloat";
import styles from "./HeroVideo.module.scss";
import Image from "next/image";

const HeroVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className={styles.heroSection} id="home">
      {/* Video background */}
      <video
        ref={videoRef}
        className={styles.videoBg}
        src="/videos/intro.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      {/* Dark overlay */}
      <div className={styles.overlay} />
      {/* Particle background */}
      <ParticleBackground />
      {/* Floating tech icons */}
      <TechFloat />
      {/* Content */}
      <div className={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={styles.profileWrapper}
        >
          <Image
            src="/images/profile.jpg"
            alt="Manjunatha R"
            width={200}
            height={200}
            className={styles.profileImage}
          />
          <h1 className={styles.name}>Manjunatha R</h1>
          <h2 className={styles.title}>Java Full Stack Developer</h2>
          {/* Typing effect */}
          <p className={styles.typing}>Java Full Stack Developer | Spring Boot Developer | React Developer</p>
        </motion.div>
        {/* Play/Pause button */}
        <PlayPauseButton isPlaying={isPlaying} onToggle={togglePlay} />
        {/* Resume & Social */}
        <div className={styles.actions}>
          <a href="/files/Manjunatha_R_Resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.resumeBtn}>
            Resume
          </a>
          <div className={styles.social}>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"><i className="fa fa-github" /></a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" /></a>
            <a href="mailto:youremail@example.com"><i className="fa fa-envelope" /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;
