import React from 'react';
import { Menu } from 'antd';
import { HomeOutlined, AppstoreOutlined, QuestionOutlined, FileDoneOutlined, ContactsOutlined, ContainerOutlined } from '@ant-design/icons';

const App = () => (

  <Menu mode="horizontal" defaultSelectedKeys={['about']}>

    <Menu.Item key="logo" disabled="true" style={{ fontSize: 50 }}>
      <span>Matt Lawhorn Portfolio</span>  
    </Menu.Item>

    <Menu.Item key="about" icon={<QuestionOutlined />}>
      <a class="nav-link" href="/about">About Me</a>
    </Menu.Item>

    <Menu.SubMenu key="my-projects" title="My Projects" icon={<FileDoneOutlined />}>

      <Menu.Item key="one" icon={<AppstoreOutlined />}>
        <a class="nav-link" href="/project">Project One</a>
      </Menu.Item>
      
      <Menu.Item key="two" icon={<AppstoreOutlined />}>
        <a class="nav-link" href="/project">Project Two</a>
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