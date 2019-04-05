import React, { Component } from 'react';
import './App.css';
//import moment from 'moment';
import Siderbar from './components/Slidebar';
import ListNhanVien from './components/ListNhanVien';

import {
  Form, Icon,Layout
} from 'antd';
const { Header, Content } = Layout;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      collapsed: false,
      newItemValue :''
    };
    //this.onChangeText = this.onChangeText.bind(this);
}

  

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    
    return (
      <Layout>
        <Siderbar collapsed={this.state.collapsed}/>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,}}>
            <ListNhanVien />

          </Content>
        </Layout>
      </Layout>
    );
  }
}
const WrappedHorizontalLoginForm = Form.create({ name: 'horizontal_login' })(App);

export default WrappedHorizontalLoginForm;
