"use client";

import React from "react";
import {
    Column,
    Flex,
    Heading,
    Icon,
    IconButton,
    Text,
    Button,
    Input,
    Textarea,
} from "@/once-ui/components";
import { contact, person } from "@/app/resources/content";

export default function Contact() {
    return (
        <Column fillWidth horizontal="center" paddingY="xl" gap="40" maxWidth="m">
            <Column gap="8" fillWidth>
                <Heading as="h1" variant="display-strong-s" style={{ color: '#E11D48' }}>
                    {contact.title}
                </Heading>
                <Text variant="body-default-l" onBackground="neutral-weak">
                    {contact.description}
                </Text>
            </Column>

            <Flex fillWidth gap="24" mobileDirection="column">
                {/* Left Column: Contact Info */}
                <Flex
                    flex={1}
                    direction="column"
                    padding="xl"
                    radius="l"
                    background="surface"
                    border="neutral-alpha-weak"
                    gap="32"
                >
                    <Column gap="8">
                        <Text variant="heading-strong-m">Let's Start a Conversation</Text>
                        <Text variant="body-default-m" onBackground="neutral-weak">
                            I'm always open to discussing projects, opportunities, or tech. Feel free to reach out anytime.
                        </Text>
                    </Column>

                    <Column gap="24">
                        {/* Email */}
                        <Flex vertical="center" gap="16">
                            <Flex
                                padding="12"
                                radius="l"
                                background="brand-alpha-weak"
                                style={{ backgroundColor: 'rgba(225, 29, 72, 0.1)' }}
                            >
                                <Icon name="email" size="s" style={{ color: '#E11D48' }} />
                            </Flex>
                            <Column>
                                <Text variant="body-default-s" onBackground="neutral-weak">Email</Text>
                                <Text variant="body-default-m">{contact.info.email}</Text>
                            </Column>
                        </Flex>

                        {/* Phone */}
                        <Flex vertical="center" gap="16">
                            <Flex
                                padding="12"
                                radius="l"
                                background="brand-alpha-weak"
                                style={{ backgroundColor: 'rgba(225, 29, 72, 0.1)' }}
                            >
                                <Icon name="phone" size="s" style={{ color: '#E11D48' }} />
                            </Flex>
                            <Column>
                                <Text variant="body-default-s" onBackground="neutral-weak">Phone</Text>
                                <Text variant="body-default-m">{contact.info.phone}</Text>
                            </Column>
                        </Flex>

                        {/* LinkedIn */}
                        <Flex vertical="center" gap="16">
                            <Flex
                                padding="12"
                                radius="l"
                                background="brand-alpha-weak"
                                style={{ backgroundColor: 'rgba(225, 29, 72, 0.1)' }}
                            >
                                <Icon name="linkedin" size="s" style={{ color: '#E11D48' }} />
                            </Flex>
                            <Column>
                                <Text variant="body-default-s" onBackground="neutral-weak">LinkedIn</Text>
                                <Text variant="body-default-m">{contact.info.linkedin}</Text>
                            </Column>
                        </Flex>

                        {/* Location */}
                        <Flex vertical="center" gap="16">
                            <Flex
                                padding="12"
                                radius="l"
                                background="brand-alpha-weak"
                                style={{ backgroundColor: 'rgba(225, 29, 72, 0.1)' }}
                            >
                                <Icon name="location" size="s" style={{ color: '#E11D48' }} />
                            </Flex>
                            <Column>
                                <Text variant="body-default-s" onBackground="neutral-weak">Location</Text>
                                <Text variant="body-default-m">{contact.info.location}</Text>
                            </Column>
                        </Flex>
                    </Column>
                </Flex>

                {/* Right Column: Contact Form */}
                <Flex flex={1}>
                    <form
                        action="https://formsubmit.co/manja.r2505@gmail.com"
                        method="POST"
                        style={{ width: '100%' }}
                    >
                        <Flex
                            direction="column"
                            padding="xl"
                            radius="l"
                            background="surface"
                            border="neutral-alpha-weak"
                            gap="24"
                            fillWidth
                        >
                            <Text variant="heading-strong-m">Send a Message</Text>
                            
                            {/* FormSubmit Configuration */}
                            <input type="hidden" name="_subject" value="New Message from Portfolio" />
                            <input type="hidden" name="_template" value="table" />
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_next" value="https://manjunath-portfolio.vercel.app/contact" />

                            <Input
                                id="name"
                                name="name"
                                label="Your Name"
                                labelAsPlaceholder
                                required
                            />

                            <Input
                                id="email"
                                name="email"
                                type="email"
                                label="Your Email"
                                labelAsPlaceholder
                                required
                            />

                            <Textarea
                                id="message"
                                name="message"
                                label="Your Message"
                                labelAsPlaceholder
                                required
                            />

                            <Button
                                type="submit"
                                variant="primary"
                                size="l"
                                fillWidth
                                style={{
                                    backgroundColor: "#E11D48",
                                    color: "white",
                                }}
                            >
                                <Flex gap="8" vertical="center">
                                    <Icon name="send" size="s" />
                                    <Text>Send Message</Text>
                                </Flex>
                            </Button>
                        </Flex>
                    </form>
                </Flex>
            </Flex>
        </Column>
    );
}
