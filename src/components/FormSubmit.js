import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNhanViens, listNhanViens } from '../actions/nhanVienActions';
import {Button, Modal, Form, Input} from 'antd';

const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
    // eslint-disable-next-line
    class extends React.Component {
      render() {
        const {
            visible, onCancel, onCreate, form,
          } = this.props;
          const { getFieldDecorator } = form;
        return (
          <Modal
            visible={visible}
            title="Thêm nhân viên"
            okText="Thêm"
            cancelText ="Hủy"
            onCancel={onCancel}
            onOk={onCreate}
          >
            <Form layout="vertical">
              <Form.Item label="Tên">
                {getFieldDecorator('Ten', {
                  rules: [{ required: true, message: 'Please input the title of collection!' }],
                })(
                  <Input />
                )}
              </Form.Item>
              <Form.Item label="Số điện thoại">
                {getFieldDecorator('SoDienThoai')(<Input type="number" />)}
              </Form.Item>
              <Form.Item label="Email">
                {getFieldDecorator('Email')(<Input type="email" />)}
              </Form.Item>
              <Form.Item label="Địa chỉ">
                {getFieldDecorator('DiaChi')(<Input type="text" />)}
              </Form.Item>
            </Form>
          </Modal>
        );
      }
    }
  );

export class FormSubmit extends Component {
    constructor(props) {
        super(props);
        this.state = {
          visible: false
        }
    }
    showModal = () => {
        this.setState({ visible: true });
      }
    
      handleCancel = () => {
        this.setState({ visible: false });
      }
    
      handleCreate = () => {
        const form = this.formRef.props.form;
        form.validateFields((err, values) => {
          if (err) {
            return;
          }
    
          console.log('Received values of form: ', values);
          let item = JSON.stringify(values);
          this.props.addNhanViens(item);
          this.props.listNhanViens();

          form.resetFields();
          this.setState({ visible: false });
        });
      }
    
      saveFormRef = (formRef) => {
        this.formRef = formRef;
      }
  render() {
    return (
        <div>
            <Button type="primary" onClick={this.showModal}>Thêm nhân viên</Button>
            <CollectionCreateForm
            wrappedComponentRef={this.saveFormRef}
            visible={this.state.visible}
            onCancel={this.handleCancel}
            onCreate={this.handleCreate}
            />
        </div>
    )
  }
}
//const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(FormSubmit);

//export default WrappedNormalLoginForm
const mapStateFromProps=state=>{
    //console.log('state', state);
    const {nhanVienReducer}=state;
    return {nhanVienReducer}
  }
  export default connect(
  mapStateFromProps,
  { addNhanViens , listNhanViens}
  )(FormSubmit);
