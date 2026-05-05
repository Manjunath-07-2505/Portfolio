"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Flex, Text, Button, SmartLink, IconButton } from "@/once-ui/components";
import styles from "./Header.module.scss";
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

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Education", href: "/about#Studies" },
        { name: "Experience", href: "/about#Experience" },
        { name: "Skills", href: "/about#Technical skills" },
        { name: "Projects", href: "/work" },
        { name: "Certifications", href: "/about#Certifications" },
        { name: "Gallery", href: "/gallery" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <Flex
            as="header"
            fillWidth
            position="fixed"
            zIndex={10}
            horizontal="center"
            className={`${styles.position} ${scrolled ? styles.scrolled : ""}`}
            style={{
                backdropFilter: scrolled ? "blur(1rem)" : "none",
                background: scrolled ? "rgba(0, 0, 0, 0.8)" : "transparent",
                transition: "all 0.3s ease",
            }}
        >
            <Flex
                fillWidth
                paddingX="l"
                paddingY="m"
                horizontal="space-between"
                vertical="center"
                gap="24"
            >
                {/* Logo / Name */}
                <SmartLink href="/" style={{ textDecoration: "none" }}>
                    <Text variant="heading-strong-m" onBackground="neutral-strong">
                        {person.firstName} {person.lastName}
                    </Text>
                </SmartLink>

                {/* Desktop Nav Links */}
                <Flex hide="s" gap="24" vertical="center">
                    {navLinks.map((link) => (
                        <SmartLink
                            key={link.name}
                            href={link.href}
                            style={{ textDecoration: "none" }}
                        >
                            <Text
                                variant="body-default-s"
                                onBackground={pathname === link.href ? "neutral-strong" : "neutral-weak"}
                                style={{
                                    transition: "color 0.2s ease",
                                }}
                            >
                                {link.name}
                            </Text>
                        </SmartLink>
                    ))}
                </Flex>

                {/* Right side: Resume & Mobile Toggle */}
                <Flex gap="12" vertical="center">
                    <Button
                        href={about.resume.link}
                        variant="primary"
                        size="s"
                        style={{
                            backgroundColor: "#E11D48",
                            color: "white",
                            borderRadius: "9999px",
                        }}
                    >
                        Resume
                    </Button>
                    
                    <Flex show="s">
                        <IconButton
                            icon={isMenuOpen ? "close" : "menu"}
                            variant="ghost"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        />
                    </Flex>
                </Flex>
            </Flex>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <Flex
                    show="s"
                    fillWidth
                    position="fixed"
                    top="64"
                    left="0"
                    background="surface"
                    direction="column"
                    padding="l"
                    gap="16"
                    className={styles.mobileMenu}
                    style={{
                        height: "calc(100vh - 64px)",
                        zIndex: 11,
                    }}
                >
                    {navLinks.map((link) => (
                        <SmartLink
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            style={{ textDecoration: "none" }}
                        >
                            <Text
                                variant="heading-strong-s"
                                onBackground={pathname === link.href ? "neutral-strong" : "neutral-weak"}
                            >
                                {link.name}
                            </Text>
                        </SmartLink>
                    ))}
                </Flex>
            )}
        </Flex>
    );
};

