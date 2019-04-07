import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./routes";
//import MenuLeft from "./components/Parts/MenuLeft";
import Siderbar from './components/Slidebar';
// import ListNhanVien from './components/ListNhanVien';

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

showContentMenus(routes) {
  let kq = null;
  if (routes.length > 0) {
    kq = routes.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        component={route.main}
      />
    ));
  }
  return kq;
}
  

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    
    return (
      <Router>
      <Layout>
        <Siderbar collapsed={this.state.collapsed}/>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            Demo React Redux Saga Api RouterDom
          </Header>
          <Content style={{margin: '24px 16px', padding: 24, background: '#fff', minHeight: '88vh',}}>
            <Switch>{this.showContentMenus(routes)}</Switch>
            {/* <ListNhanVien /> */}
          </Content>
        </Layout>
      </Layout>
      </Router>
    );
  }
}
const WrappedHorizontalLoginForm = Form.create({ name: 'horizontal_login' })(App);

export default WrappedHorizontalLoginForm;
