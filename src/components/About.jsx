import React from 'react';
import ReactDOM from 'react-dom';
import { Image } from 'antd';

const About = () => {
    return(
        <div style={{ margin: '1rem' }}>
            <h2>Learn about me here!</h2>

            <Image
                width={200}
                src="/picofme.jpg"
            />

            <h1>Who I am:</h1>
            <p style={{ margin: '2rem' }}>I am a junior full-stack developer, but it's been a journey to get here. Two years ago I got my B.S. in Geology at UT El Paso. I've been a project manager and an assistant production manager at a plant. And for nearly a decade I was in the service industry. And now I take all the skills and lessons from those experiences, the support of the folks I met along the way, add a smidge of hacking away at a keyboard, and I get to make cutting edge web apps-- how cool is that?</p>
        </div>
    );
};

export default About;
