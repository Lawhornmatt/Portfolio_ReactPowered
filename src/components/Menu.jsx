import React from 'react';
import { Menu } from 'antd';
import { HomeOutlined, AppstoreOutlined, QuestionOutlined, FileDoneOutlined } from '@ant-design/icons';

const App = () => (

  <Menu mode="horizontal" defaultSelectedKeys={['about']}>

    <Menu.Item key="about" icon={<HomeOutlined />}>
      <a class="nav-link" href="/">Home</a>
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

  </Menu>
);

export default App;