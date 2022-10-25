import React from 'react';
import Project from '../Project';
import giftPilot from '../../assets/images/gift-pilot.JPG';
import runBuddy from '../../assets/images/run-buddy.jpg';
import streamConnect from '../../assets/images/Stream-Connect-snippet.png';

function Portfolio() {
    const projects = [{
        name: 'Gift Pilot',
        stack: 'Sequalize/Handlebars',
        image: giftPilot,
        liveUrl: 'https://gift-pilot.herokuapp.com/home',
        repoUrl: 'https://github.com/gatorhatur/gift-pilot'
    },
    {
        name: 'Stream Connect',
        stack: 'HTML/jQuery/Materialize',
        image: streamConnect,
        liveUrl: 'https://gatorhatur.github.io/stream-connect/',
        repoUrl: 'https://github.com/gatorhatur/stream-connect'
    },
    {
        name: 'Run Buddy',
        stack: 'HTML/CSS',
        image: runBuddy,
        liveUrl: 'https://gatorhatur.github.io/run-buddy/',
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
        <div className='row justify-content-center mt-3'>
            {projects.map((project, index) => {
                return <Project project={project} key={index} />
            })}
        </div>
    );
}

export default Portfolio;