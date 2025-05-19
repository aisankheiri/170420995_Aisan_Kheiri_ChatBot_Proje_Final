import React from "react";
import { Tabs } from "antd";

import Chat from "./Chat";
import Chat2 from "./Chat2";

const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: "Bert Model",
    children: <Chat />,
  },
  {
    key: "2",
    label: "T5-Small Model",
    children: <Chat2 />,
  },
];
const TabsModels = () => (
  <Tabs defaultActiveKey="1" items={items} onChange={onChange} centered />
);
export default TabsModels;
