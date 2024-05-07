import React from 'react';
import { CodeMockup, PhoneMockup } from 'react-daisyui'

import Header from '../components/Header';
import HeroComponent from "../components/HeroComponent.js";
import FooterComponent from "../components/FooterComponent.js";

const Home = () => {

  return (
    <div className='relative'>
        <Header />     
        <HeroComponent />
        
        <div className='flex flex-wrap justify-center'>
            <CodeMockup className='mx-10 my-4 max-w-md' >
                <CodeMockup.Line>yarn add daisyui react-daisyui</CodeMockup.Line>
                <CodeMockup.Line className="text-warning">installing...</CodeMockup.Line>
                <CodeMockup.Line className="text-success">Done!</CodeMockup.Line>
            </CodeMockup>
        </div>
        <div className='flex flex-wrap justify-center'>
            <PhoneMockup className='my-4'>Hi.</PhoneMockup>
        </div>
        <FooterComponent />
    </div>
  );
};

export default Home;