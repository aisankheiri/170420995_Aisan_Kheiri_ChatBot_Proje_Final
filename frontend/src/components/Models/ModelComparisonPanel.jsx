import React from "react";
import { Table, Typography, Card } from "antd";

const { Title, Text } = Typography;

const columns = [
  {
    title: "Intent",
    dataIndex: "intent",
    key: "intent",
  },
  {
    title: "BERT F1",
    dataIndex: "bertF1",
    key: "bertF1",
    render: (val) => <Text>{val}</Text>,
  },
  {
    title: "T5 F1",
    dataIndex: "t5F1",
    key: "t5F1",
    render: (val) => <Text>{val}</Text>,
  },
];

const data = [
  { intent: "AddToCart", bertF1: 0.95, t5F1: 0.48 },
  { intent: "ApplyDiscount", bertF1: 0.93, t5F1: 0.00 },
  { intent: "Checkout", bertF1: 0.90, t5F1: 0.00 },
  { intent: "ClearCart", bertF1: 0.88, t5F1: 0.00 },
  { intent: "Fallback", bertF1: 0.91, t5F1: 0.00 },
  { intent: "Goodbye", bertF1: 0.97, t5F1: 0.00 },
  { intent: "Greeting", bertF1: 0.96, t5F1: 0.00 },
  { intent: "RemoveFromCart", bertF1: 0.94, t5F1: 0.00 },
  { intent: "UpdateQuantity", bertF1: 0.96, t5F1: 0.61 },
  { intent: "ViewCart", bertF1: 0.92, t5F1: 0.00 },
];

const ModelComparisonPanel = () => {
  return (
    <Card style={{ maxWidth: 900, margin: "40px auto" }}>
      <Title level={3}>BERT vs T5 Model Karşılaştırması (F1-Score)</Title>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        rowKey="intent"
        size="small"
      />
    </Card>
  );
};

export default ModelComparisonPanel;
