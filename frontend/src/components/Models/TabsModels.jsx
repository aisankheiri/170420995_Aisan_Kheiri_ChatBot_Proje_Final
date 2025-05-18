import React from 'react';
import { Tabs } from 'antd';
import BertModelInfoPanel from './BertModelInfoPanel';

const onChange = key => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: 'Bert',
    children: <BertModelInfoPanel/>,
  },
  {
    key: '2',
    label: 'Model2',
    children: <BertModelInfoPanel/>,
  },
];
const TabsModels = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} centered />;
export default TabsModels;