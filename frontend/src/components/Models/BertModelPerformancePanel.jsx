// ModelPerformancePanel.jsx
import React from "react";
import { Card, Typography, Table, Tag } from "antd";

const { Title, Paragraph, Text } = Typography;

const data = [
  { key: "AddToCart", precision: 1.0, recall: 1.0, f1: 1.0, support: 141 },
  { key: "ApplyDiscount", precision: 1.0, recall: 1.0, f1: 1.0, support: 14 },
  { key: "Checkout", precision: 1.0, recall: 1.0, f1: 1.0, support: 1 },
  { key: "ClearCart", precision: 0.0, recall: 0.0, f1: 0.0, support: 4 },
  {
    key: "RemoveFromCart",
    precision: 0.9375,
    recall: 1.0,
    f1: 0.9677,
    support: 15,
  },
  { key: "UpdateQuantity", precision: 1.0, recall: 1.0, f1: 1.0, support: 181 },
  { key: "ViewCart", precision: 0.0, recall: 0.0, f1: 0.0, support: 0 },
];

const summary = [
  { label: "Accuracy", value: "0.9888", color: "green" },
  { label: "Macro Avg F1", value: "0.7097" },
  { label: "Weighted Avg F1", value: "0.9874" },
];

const columns = [
  { title: "Intent", dataIndex: "key", key: "key" },
  { title: "Precision", dataIndex: "precision", key: "precision" },
  { title: "Recall", dataIndex: "recall", key: "recall" },
  { title: "F1-Score", dataIndex: "f1", key: "f1" },
  { title: "Destek (Support)", dataIndex: "support", key: "support" },
];

const ModelPerformancePanel = () => {
  return (
    <Card style={{ maxWidth: 900, margin: "40px auto", borderRadius: 12 }}>
      <Typography>
        <Title level={3}>📈 Model Performans Raporu</Title>

        <Paragraph>
          Aşağıda, her bir intent sınıfı için modelin sınıflandırma performans
          metrikleri (Precision, Recall, F1-Score) ve destek sayıları yer
          almaktadır.
        </Paragraph>

        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          bordered
          size="middle"
          style={{ marginBottom: 24 }}
        />

        <Paragraph>
          <Text strong>Genel Başarı Metrikleri:</Text>
          <ul>
            {summary.map((item) => (
              <li key={item.label}>
                <Text>{item.label}:</Text>{" "}
                {item.color ? (
                  <Tag color={item.color}>{item.value}</Tag>
                ) : (
                  item.value
                )}
              </li>
            ))}
          </ul>
        </Paragraph>
      </Typography>
    </Card>
  );
};

export default ModelPerformancePanel;
