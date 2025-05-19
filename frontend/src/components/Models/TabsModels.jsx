import React from 'react';
import { Tabs } from 'antd';
import BertModelInfoPanel from './BertModelInfoPanel';
import T5ModelInfoPage from './T5ModelInfoPage';

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
    label: 'T5-Small',
    children: <T5ModelInfoPage/>,
  },
];
const TabsModels = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} centered />;
export default TabsModels;