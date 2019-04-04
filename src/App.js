import React, { Component } from 'react';
import './App.css';
import moment from 'moment';
import {
  Form, Icon, Input, Button,Layout, Menu, DatePicker    
} from 'antd';


const { Header, Sider, Content } = Layout;
  function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      collapsed: false,
      newItemValue :''
    };
    //this.onChangeText = this.onChangeText.bind(this);
}
componentDidMount() {
  // To disabled submit button at the beginning.
  //this.props.form.validateFields();
}

handleSubmit = (e) => {
  e.preventDefault();
  this.props.form.validateFields((err, fieldsValue) => {
    if (!err) {
      console.log('Received values of form: ', fieldsValue);
      console.log('date-picker: ', fieldsValue['date-picker'].format('YYYY-MM-DD'));
      console.log('password: ', fieldsValue['password']);
    }
  });
}
  

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    const config = {
      initialValue: moment(new Date()),
      rules: [{ type: 'object', required: true, message: 'Please select time!' }],
    };

    const {
      getFieldDecorator, getFieldsError, getFieldError, isFieldTouched,
    } = this.props.form;

    // Only show error after a field is touched.
    const userNameError = isFieldTouched('userName') && getFieldError('userName');
    const passwordError = isFieldTouched('password') && getFieldError('password');
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,}}>
            <Form layout="inline" onSubmit={this.handleSubmit}>
              <Form.Item
                validateStatus={userNameError ? 'error' : ''}
                help={userNameError || ''}
              >
                {getFieldDecorator('userName', {
                  initialValue: 'ahihi',
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                )}
              </Form.Item>
              <Form.Item
                validateStatus={passwordError ? 'error' : ''}
                help={passwordError || ''}
              >
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                )}
              </Form.Item>
              <Form.Item
                label="DatePicker"
              >
                {getFieldDecorator('date-picker', config)(
                  <DatePicker format="DD-MM-YYYY" />
                )}
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  disabled={hasErrors(getFieldsError())}
                >
                  Log in
                </Button>
              </Form.Item>
            </Form>

          </Content>
        </Layout>
      </Layout>
    );
  }
}
const WrappedHorizontalLoginForm = Form.create({ name: 'horizontal_login' })(App);

export default WrappedHorizontalLoginForm;
