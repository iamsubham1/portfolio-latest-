"use client";
import React, { useState, useEffect } from "react";
import './Navbar.css';
import { cn } from "@/lib/utils";
import Link from "next/link";
import styled from "styled-components";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

// Define the type for navItems
type NavItem = {
  name: string;
  link: string;
  icon?: JSX.Element;
};

export const Navbar = ({
  navItems,
  className,
}: {
  navItems: NavItem[];
  className?: string;
}) => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsNavbarVisible(currentScrollTop < lastScrollTop || currentScrollTop === 0);
      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <div
      className={cn(
        "flex max-w-full fixed inset-x-0 mx-auto border-transparent dark:border-white/[0.2]  dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-evenly space-x-4 transition-all duration-[30s] ease-in-out",
        isNavbarVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-100%]',
        className
      )}
    >

      <IconContainer>

        <p className="handwriting "><span className="gradient-span">S</span>ubham Das</p>


      </IconContainer>


      <div className="flex gap-6">

        {navItems.map((navItem: NavItem, idx: number) => (
          <Link
            key={`link-${idx}`}  // Use a unique key
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex text-[1rem] text-white dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            {navItem.name}
          </Link>
        ))}
      </div>

      <IconContainer>
        <a href="https://www.linkedin.com/in/subham-das-35b851242/" target="_blank">
          <IconBrandLinkedin className="icon" />
        </a>
        <a href="https://github.com/iamsubham1" target="_blank">
          <IconBrandGithub className="icon" />
        </a>
      </IconContainer>
    </div>
  );
};

const IconContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;

  .icon {
    width: 24px;
    height: 24px;
    color: #0b69a0;
    transition: color 0.3s ease;
  }

  a:hover .icon {
    color: white;  // Change to a color on hover
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

  // Hide the icons for mobile screens
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
