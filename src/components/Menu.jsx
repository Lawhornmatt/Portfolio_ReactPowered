import React from 'react';
import { Menu } from 'antd';
import { HomeOutlined, AppstoreOutlined, QuestionOutlined, FileDoneOutlined, ContactsOutlined, ContainerOutlined } from '@ant-design/icons';

const App = () => (

  <Menu mode="horizontal" defaultSelectedKeys={['about']}>

    
    <span style={{ fontSize: 50 }}>Matt Lawhorn Portfolio</span>  
    

    <Menu.Item key="about" icon={<QuestionOutlined />}>
      <a class="nav-link" href="/about">About Me</a>
    </Menu.Item>

    <Menu.SubMenu key="my-projects" title="My Projects" icon={<FileDoneOutlined />}>

      <Menu.Item key="one" icon={<AppstoreOutlined />}>
        <a class="nav-link" href="/password">Password Generator</a>
      </Menu.Item>
      
      <Menu.Item key="two" icon={<AppstoreOutlined />}>
        <a class="nav-link" href="/weather">Weather App</a>
      </Menu.Item>
      
      <Menu.Item key="two" icon={<AppstoreOutlined />}>
        <a class="nav-link" href="/quiz">Quiz Machine</a>
      </Menu.Item>
      
      <Menu.Item key="two" icon={<AppstoreOutlined />}>
        <a class="nav-link" href="/schedule">Schedutron</a>
      </Menu.Item>
      
      <Menu.Item key="two" icon={<AppstoreOutlined />}>
        <a class="nav-link" href="/recipe">RecipeIO</a>
      </Menu.Item>
      
      <Menu.Item key="two" icon={<AppstoreOutlined />}>
        <a class="nav-link" href="/blog">Tech Blog</a>
      </Menu.Item>

    </Menu.SubMenu>

      <Menu.Item key="contact" icon={<ContactsOutlined />}>
        <a class="nav-link" href="/contact">Contact Me</a>
      </Menu.Item>

      <Menu.Item key="resume" icon={<ContainerOutlined />}>
        <a class="nav-link" href="/resume">Resume</a>
      </Menu.Item>


  </Menu>
);

export default App;