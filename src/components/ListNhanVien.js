import React, { Component } from 'react'
import _ from 'lodash';
import { connect } from 'react-redux';
import { listNhanViens, delNhanViens } from '../actions/nhanVienActions';
import FormSubmit from './FormSubmit';
import {
    Table, Divider, Icon, message, Modal
  } from 'antd';


export class ListNhanVien extends Component {
  constructor(props) {
      super(props);
      this.state = {
        data: [],
        newItem:{},
        edit: false
      }
      
      
      this._columns = [
        //{title: 'STT',dataIndex: 'stt',key: 'stt',}, 
        {title: 'STT', dataIndex: 'key', key: 'key', width: '5%', align: 'center', render: (e) => <span>{e}</span> },
        {title: 'Tên',dataIndex: 'Ten',key: 'Ten',},
        {title: 'Số ĐT',dataIndex: 'SoDienThoai',key: 'SoDienThoai',}, 
        {title: 'Email',dataIndex: 'Email',key: 'Email',}, 
        {title: 'Dịa chỉ',dataIndex: 'DiaChi',key: 'DiaChi',} , 
        {title: 'Action',key: 'action',    
          render: (item) => this.actionContent(item),
        }
    ];

    this.changeStateEdit = this.changeStateEdit.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
}
clickToItem(item){
  //console.log('item',item);
  this.setState({
    newItem: item,
    edit: true
  })
}
deleteItem(item){
  //console.log('itemDel',item);
  let that = this;
  Modal.confirm({
    title: 'Bạn muốn xoá?',
    content: 'Nhấn Đồng ý để xác nhận xóa',
    okText: 'Đồng ý',
    okType: 'danger',
    cancelText: 'Không xóa',
    onOk() {
        that.props.delNhanViens(JSON.stringify(item));
        message.success('Đã xóa');
        that.props.listNhanViens();
    },
    onCancel() {
      console.log('Cancel');
    },
  });
}
actionContent(item) {
  return(
    <div>
        <span className="qti-mouseover" onClick={() => this.clickToItem(item)} title="Sửa"><Icon type="edit" /></span>
        <Divider type="vertical" />
        <span className="qti-mouseover" onClick={() => this.deleteItem(item)} title="Xóa"><Icon type="delete" /></span>
    </div>
  )
}
componentDidMount() {
    this.props.listNhanViens();
}
static getDerivedStateFromProps(nextProps, prevState){
    const { nhanVienReducer } = nextProps;
    return { data: nhanVienReducer.data };
}

changeStateEdit(){
  this.setState({ edit: false });
  console.log('this.state', this.state.edit);
}

  render() {
    let lastIndex = 0
    const updateIndex = () => {
      lastIndex++
      return lastIndex
    }
    
    const data = this.state.data;
    let dataAfter = _.map(data, (item, index) => {
        item = { key: index + 1 , ...item };
        return item;
    });
    return (
        <div>
        <FormSubmit newItem ={this.state.newItem} edit={this.state.edit} changeStateEdit = {this.changeStateEdit}/>
        <Table columns={this._columns} dataSource={dataAfter} rowKey={updateIndex} />
        </div>
    )
  }
}

const mapStateFromProps=state=>{
    //console.log('state', state);
    const {nhanVienReducer}=state;
    return {nhanVienReducer}
  }
export default connect(
  mapStateFromProps,
  { listNhanViens, delNhanViens }
)(ListNhanVien);