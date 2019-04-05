import React, { Component } from 'react'
import _ from 'lodash';
import { connect } from 'react-redux';
import { listNhanViens } from '../actions/nhanVienActions';
import FormSubmit from './FormSubmit';

import {
    Table, Divider
  } from 'antd';

const columns = [
    //{title: 'STT',dataIndex: 'stt',key: 'stt',}, 
    {title: 'STT', dataIndex: 'key', key: 'key', width: '5%', align: 'center', render: (e) => <span>{e}</span> },
    {title: 'Tên',dataIndex: 'Ten',key: 'Ten',},
    {title: 'Số ĐT',dataIndex: 'SoDienThoai',key: 'SoDienThoai',}, 
    {title: 'Email',dataIndex: 'Email',key: 'Email',}, 
    {title: 'Dịa chỉ',dataIndex: 'DiaChi',key: 'DiaChi',} , 
    {title: 'Action',key: 'action',    
        render: () => (<span>
        <a href="javascript:void(0)" >Sửa</a>
        <Divider type="vertical" />
        <a href="javascript:void(0)" >Xóa</a>
      </span>
    ),
    }
];
  

export class ListNhanVien extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          newItem:{}
        }
    }
componentDidMount() {
    this.props.listNhanViens();
}
static getDerivedStateFromProps(nextProps, prevState){
    const { nhanVienReducer } = nextProps;
    return { data: nhanVienReducer };
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
        <FormSubmit/>
        <Table columns={columns} dataSource={dataAfter} rowKey={updateIndex} />
        </div>
    )
  }
}

const mapStateFromProps=state=>{
    console.log('state', state);
    const {nhanVienReducer}=state;
    return {nhanVienReducer}
  }
export default connect(
  mapStateFromProps,
  { listNhanViens }
)(ListNhanVien);