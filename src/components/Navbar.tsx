"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Flex, Text, Button, SmartLink } from "@/once-ui/components";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./Navbar.module.css";
import { person, about } from "@/app/resources/content";

export const Navbar = () => {
    const pathname = usePathname() ?? "";
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [isMenuOpen]);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Projects", href: "/work" },
        { name: "Gallery", href: "/gallery" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header
            className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
        >
            <div className={styles.navInner}>
                {/* Logo / Name */}
                <SmartLink href="/" style={{ textDecoration: "none" }}>
                    <span className={styles.navLogo}>
                        {person.firstName} {person.lastName}
                    </span>
                </SmartLink>

                {/* Desktop Nav Links */}
                <nav className={styles.desktopNav}>
                    {navLinks.map((link) => (
                        <SmartLink
                            key={link.name}
                            href={link.href}
                            style={{ textDecoration: "none" }}
                        >
                            <span
                                className={`${styles.navLink} ${pathname === link.href ? styles.navLinkActive : ""}`}
                            >
                                {link.name}
                            </span>
                        </SmartLink>
                    ))}
                </nav>

                {/* Right: Resume + Hamburger */}
                <div className={styles.navRight}>
                    <a
                        href={about.resume.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.resumeBtn}
                    >
                        Resume
                    </a>
                    <button
                        className={styles.hamburger}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div
                    className={styles.mobileOverlay}
                    onClick={() => setIsMenuOpen(false)}
                    aria-hidden="true"
                />
            )}

            {/* Mobile Menu Drawer */}
            <nav
                className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ""}`}
                aria-hidden={!isMenuOpen}
            >
                <div className={styles.mobileMenuLinks}>
                    {navLinks.map((link) => (
                        <SmartLink
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            style={{ textDecoration: "none" }}
                        >
                            <span
                                className={`${styles.mobileNavLink} ${pathname === link.href ? styles.mobileNavLinkActive : ""}`}
                            >
                                {link.name}
                            </span>
                        </SmartLink>
                    ))}
                    <a
                        href={about.resume.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.mobileResumeBtn}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Download Resume
                    </a>
                </div>
            </nav>
        </header>
    );
};
