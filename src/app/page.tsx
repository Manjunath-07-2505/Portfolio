"use client";

import { useRef, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  return (
    <section className={styles.heroSection}>
      {/* Video wrapper */}
      <div className={styles.videoWrapper}>
        <video
          ref={videoRef}
          src="/videos/intro.mp4"
          autoPlay
          loop
          playsInline
          muted
          controls={false}
          disablePictureInPicture
          className={styles.heroVideo}
        />

        {/* Mute / Unmute toggle button */}
        <button
          className={styles.muteBtn}
          onClick={toggleMute}
          aria-label={muted ? "Unmute video" : "Mute video"}
          title={muted ? "Click to unmute" : "Click to mute"}
        >
          {muted ? (
            /* Sound off icon */
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
          ) : (
            /* Sound on icon */
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            </svg>
          )}
          <span className={styles.muteBtnLabel}>
            {muted ? "Tap for sound" : "Mute"}
          </span>
        </button>
      </div>

      {/* Bio text */}
      <div className={styles.heroBio}>
        Dedicated and results-driven Full Stack Developer with hands-on
        experience in Java, Spring Boot, REST APIs, MySQL and frontend
        technologies. Experienced in building secure full-stack applications
        using JWT authentication, Spring Boot and React.js. Strong knowledge of
        OOPs, JDBC, Hibernate, and Git with internship experience in full stack
        and AI/ML development
      </div>
    </section>
  );
}
