import React from 'react';
import ReactDOM from 'react-dom';
import { Image } from 'antd';

const About = () => {
    return(
        <div>
            <h1>Learn about me here!</h1>

            <Image
                width={200}
                src="/picofme.jpg"
            />
        </div>
    );
};

export default About;