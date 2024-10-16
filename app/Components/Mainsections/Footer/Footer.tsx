"use client"

import React, { memo, useState } from "react";
import { SectionWrapper } from '@/app/hoc';
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import styled from "styled-components";
import MagicButton from "../../ui/MagicButton";
import { IoCopyOutline } from "react-icons/io5";

const Footer: React.FC = () => {

    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        const text = "tarunappari23@gmail.com";
        navigator.clipboard.writeText(text);
        setCopied(true);
    };

    return (
        <FooterContainer>
            <ButtonContainer>
                <MagicButton
                    title={copied ? "Email is Copied!" : "Copy my email address"}
                    icon={<IoCopyOutline />}
                    position="left"
                    handleClick={handleCopy}
                    otherClasses="!bg-[#161A31]"
                />
            </ButtonContainer>

        </FooterContainer>
    )
}

export default SectionWrapper(memo(Footer), '');

const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    margin-top: -4rem;
    width: 100%;
    box-sizing: border-box;
    flex-wrap: wrap;
`;

const ButtonContainer = styled.div`
    margin-top: -3.5rem;
    text-align: center;
    width: 100%;
    .check {
        border: 1px solid red !important;
    }
`;

const IconContainer = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;
    width: 100%;
    margin-top: 1rem;

    .icon {
        width: 24px;
        height: 24px;
        color: #161A31;
        transition: color 0.3s ease;
    }

    a:hover .icon {
        color: #8e36eb;  // Change to a color on hover
    }
         @media only screen and (max-width: 800px) {
        margin-top: -8rem;
        padding: 1rem;  // Adjust padding for small screens
        flex-direction: column;
        align-items: center;
    }

    @media only screen and (max-width: 650px) {
        margin-top: 0rem;
        padding: 1rem;
    }
`;


