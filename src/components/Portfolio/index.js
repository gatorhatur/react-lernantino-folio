import React from 'react';
import Project from '../Project';
import giftPilot from '../../assets/images/gift-pilot.JPG';
import runBuddy from '../../assets/images/run-buddy.jpg';
import streamConnect from '../../assets/images/Stream-Connect-snippet.png';

function Portfolio() {
    const projects = [{
        name: 'Gift Pilot',
        stack: 'Test',
        image: giftPilot,
        liveUrl: '',
        repoUrl: 'https://github.com/gatorhatur/gift-pilot'
    },
    {
        name: 'Stream Connect',
        stack: 'Express',
        image: streamConnect,
        liveUrl: 'https://gatorhatur.github.io/stream-connect/',
        repoUrl: 'https://github.com/gatorhatur/stream-connect'
    },
    {
        name: 'Run Buddy',
        stack: '',
        image: runBuddy,
        liveUrl: '',
        repoUrl: 'https://github.com/gatorhatur/run-buddy'
    },
    {
        name: 'PlaceHolder1',
        stack: '',
        image: giftPilot,
        liveUrl: '',
        repoUrl: ''
    },
    {
        name: 'PlaceHolder2',
        stack: '',
        image: streamConnect,
        liveUrl: '',
        repoUrl: ''
    },
    {
        name: 'PlaceHolder3',
        stack: '',
        image: runBuddy,
        liveUrl: '',
        repoUrl: ''
    }];

    return (
        <div className='d-flex flex-wrap justify-content-center mt-3'>
            {projects.map((project, index) => {
                project[index] = index
                return <Project {...project} />
            })}
        </div>
    );
}

export default Portfolio;