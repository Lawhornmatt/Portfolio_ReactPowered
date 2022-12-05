import React from 'react';
import { Layout, Menu } from 'antd';

import { YahooOutlined, GithubOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

export default function Myfooter (){
    return (
    <Footer style={{ textAlign: 'center', position: 'absolute', bottom: 0, width: '100%' }}>

        <Menu mode="horizontal" defaultSelectedKeys={['about']}>
            <span>Matt Lawhorn ©2022</span>

            <Menu.Item key="github" icon={<GithubOutlined />}>
                <a class="nav-link" href="/about">My GitHub</a>
            </Menu.Item>

            <Menu.Item key="email" icon={<YahooOutlined />}>
                <a class="nav-link" href="/about">Email Me</a>
            </Menu.Item>
        </Menu>
    </Footer>
    );
};
