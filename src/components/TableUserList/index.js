import { Table } from 'antd'
import { useState } from "react";
const TableUserList = (props) => {
  const dataSource = {
    
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
  ];
  
  return (
    <Table dataSource={props.dataSource} columns={columns} />
  );
};

export default TableUserList;