import React from 'react';
import { Layout, Menu } from 'antd';

import { MediumOutlined, GithubOutlined, LinkedinOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

export default function Myfooter (){
    return (
    <Footer style={{ textAlign: 'center', position: 'absolute', bottom: 0, width: '100%' }}>

        <Menu mode="horizontal">
            <span>Matt Lawhorn ©2022</span>

            <Menu.Item key="github" icon={<GithubOutlined />}>
                <a class="nav-link" href="https://github.com/Lawhornmatt">My GitHub</a>
            </Menu.Item>

            <Menu.Item key="linkedin" icon={<LinkedinOutlined />}>
                <a class="nav-link" href="https://www.linkedin.com/in/matthew-lawhorn/">My LinkedIn</a>
            </Menu.Item>

            <Menu.Item key="medium" icon={<MediumOutlined />}>
                <a class="nav-link" href="https://www.zombo.com/">My Medium</a>
            </Menu.Item>
        </Menu>
    </Footer>
    );
};
