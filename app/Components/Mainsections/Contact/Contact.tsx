import React, { Suspense, useEffect, useState, useCallback, memo } from "react";
import styled from 'styled-components';
import { SectionWrapper } from '@/app/hoc';
import { motion, Variants } from 'framer-motion'
import { fadeIn, slideIn } from "../../../motion/motion";
import { ContactForm } from './ContactForm';

import dynamic from 'next/dynamic';
;




const Contact: React.FC = () => {

  return (
    <ContactContainer >

      <motion.div variants={fadeIn('right', 'tween', 1, 1)} className='h-full flex items-center'>
        <ContactForm />
      </motion.div>
    </ContactContainer>
  )
}

export default SectionWrapper(memo(Contact), 'contact');

let ContactContainer = styled.div`
    height: 100vh;
    display: flex
    justify-content:center;
    align-items:center;
    overflow: hidden !important;
    .form-container,.globe-container{
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem;
    }
    .globe-continer:active{
      cursor: grabbing;
    }
    .globe-container{
      .my-img{
      max-width: 25rem;
      padding-left: 2rem;
    }
    }

    @media only screen and (max-width:650px){
      padding-top: 5rem;
      display: flex;
      flex-direction: column-reverse;

      .globe-container{
        .my-img{
          padding-top: 1rem;
      width: 15rem;
      margin-left: -2rem;
      }
    }
  }
`