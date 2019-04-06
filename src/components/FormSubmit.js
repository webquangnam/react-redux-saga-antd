import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNhanViens, listNhanViens, editNhanViens } from '../actions/nhanVienActions';
import {Button, Modal, Form, Input} from 'antd';

const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
  // eslint-disable-next-line
  class extends React.Component {
    
    render() {
     
      const {
          visible, onCancel, onCreate, form, itemNew, editText
        } = this.props;
        const { getFieldDecorator } = form;
        //console.log('this.prop.newItem', itemNew)
      return (
        
        <Modal
          visible={visible}
          title="Thêm nhân viên"
          okText={editText}
          cancelText ="Hủy"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="nhanVienID" style={{display:'none'}}>
              {getFieldDecorator('nhanVienID',{
                  initialValue: itemNew.nhanVienID
            })(<Input type="number" />)}
            </Form.Item>
            <Form.Item label="Tên" >
              {getFieldDecorator('Ten', {
                initialValue: itemNew.Ten,
                rules: [{ required: true, message: 'Please input the title of collection!' }],
              })(
                <Input />
              )}
            </Form.Item>
            <Form.Item label="Số điện thoại">
              {getFieldDecorator('SoDienThoai',{
                  initialValue: itemNew.SoDienThoai
            })(<Input type="number" />)}
            </Form.Item>
            <Form.Item label="Email">
              {getFieldDecorator('Email',{
                  initialValue: itemNew.Email
            })(<Input type="email" />)}
            </Form.Item>
            <Form.Item label="Địa chỉ">
              {getFieldDecorator('DiaChi',{
                  initialValue: itemNew.DiaChi
            })(<Input type="text" />)}
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
        visible: false,
        editText:'Thêm'
      }
      
  }
  showModal = () => {
    this.setState({ visible: true });
  }

  handleCancel = () => {
    this.props.changeStateEdit();
    this.setState({ visible: false });
  }

  handleCreate = () => {
    this.props.changeStateEdit();

    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log('Received values of form: ', values);
      let item = JSON.stringify(values);
      console.log('item', item)
      if(this.props.edit){
        this.props.editNhanViens(item);
      }else{
        this.props.addNhanViens(item);
      }
      this.props.listNhanViens();

      form.resetFields();
      this.setState({ visible: false });
    });
  }

  
  saveFormRef = (formRef) => {
    this.formRef = formRef;
  }

      
  render() {
    //console.log(this.props.edit)
    //console.log(this.state.visible)
    let itemNew = {};
    let visibleC = this.state.visible;
    let editText = this.state.editText

    if(this.props.edit){
      visibleC = true;
      editText = 'Cập nhật';
      itemNew = this.props.newItem;
    }
    return (
        <div>
            <Button type="primary" onClick={this.showModal}>Thêm nhân viên</Button>
            <CollectionCreateForm 
            wrappedComponentRef={this.saveFormRef}
            visible={visibleC}
            onCancel={this.handleCancel}
            onCreate={this.handleCreate}
            itemNew = {itemNew}
            editText = {editText}
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
  { addNhanViens , listNhanViens, editNhanViens}
  )(FormSubmit);
