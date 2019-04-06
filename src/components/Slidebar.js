import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {
     Icon,Layout, Menu
  } from 'antd';
  const { Sider } = Layout;

export class Slidebar extends Component {
  
  render() {
    return (
    <Sider
        trigger={null}
        collapsible
        collapsed={this.props.collapsed}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link to="/">
              <Icon type="user" />
              <span>Home</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/About">
              <Icon type="video-camera" />
              <span>About</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <span>nav 3</span>
          </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}

export default Slidebar
