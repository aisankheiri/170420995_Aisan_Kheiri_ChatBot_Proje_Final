import React from "react";
import { Card, Typography, Table } from "antd";


const { Title, Paragraph, Text } = Typography;

const columns = [
  { title: "Intent", dataIndex: "intent", key: "intent" },
  { title: "Precision", dataIndex: "precision", key: "precision" },
  { title: "Recall", dataIndex: "recall", key: "recall" },
  { title: "F1-Score", dataIndex: "f1", key: "f1" },
  { title: "Support", dataIndex: "support", key: "support" },
];

const data = [
  { intent: "AddToCart", precision: 0.54, recall: 0.43, f1: 0.48, support: 118 },
  { intent: "ApplyDiscount", precision: 0.00, recall: 0.00, f1: 0.00, support: 5 },
  { intent: "Checkout", precision: 0.00, recall: 0.00, f1: 0.00, support: 3 },
  { intent: "ClearCart", precision: 0.00, recall: 0.00, f1: 0.00, support: 1 },
  { intent: "Fallback", precision: 0.00, recall: 0.00, f1: 0.00, support: 2 },
  { intent: "Goodbye", precision: 0.00, recall: 0.00, f1: 0.00, support: 2 },
  { intent: "Greeting", precision: 0.00, recall: 0.00, f1: 0.00, support: 1 },
  { intent: "RemoveFromCart", precision: 0.00, recall: 0.00, f1: 0.00, support: 18 },
  { intent: "UpdateQuantity", precision: 0.51, recall: 0.75, f1: 0.61, support: 118 },
  { intent: "UpdateQuantityity", precision: 0.00, recall: 0.00, f1: 0.00, support: 0 },
  { intent: "ViewCart", precision: 0.00, recall: 0.00, f1: 0.00, support: 2 },
];

const T5ModelInfoPage = () => {
  return (
    <div>
      <Card style={{ maxWidth: 900, margin: "40px auto", borderRadius: 12 }}>
        <Typography>
          <Title level={3}>Kullanılan Dil Modeli: t5-small (finetuned)</Title>

          <Paragraph>
            Bu projede sınıflandırma ve cevap üretme görevleri için
            <Text code>t5-small</Text> modeli Türkçe veriyle özel olarak
            eğitilerek kullanılmıştır.
          </Paragraph>

          <Title level={4}>Neden Bu Model?</Title>
          <Paragraph>
            T5 modeli "text-to-text" yaklaşımla her görevi bir metin üretme
            problemi olarak ele alır. Bu sayede aynı model hem niyet
            sınıflandırması hem de uygun cevap üretimi için esnek ve etkili bir
            yapı sunar.
          </Paragraph>

          <Paragraph>
            <ul>
              <li>
                <Text strong>Text-to-text framework:</Text> Girdi ve çıktılar
                her zaman metin formatındadır.
              </li>
              <li>
                <Text strong>Çok görevli uyum:</Text> Intent sınıflandırma + Q&A
                tek bir yapıda çözülebilir.
              </li>
            </ul>
          </Paragraph>

          <Title level={4}>Modelin Kullanım Amacı</Title>
          <Paragraph>
            Kullanıcının yazdığı doğal dildeki e-ticaret mesajlarını
            sınıflandırarak (örneğin: "sepetime kazak ekle" →
            <Text code>AddToCart</Text>) hem intent belirlenir.
          </Paragraph>

          <Title level={4}>Model Performansı</Title>
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            rowKey="intent"
            size="small"
            style={{ marginBottom: 24 }}
          />

          <Paragraph>
            <Text strong>Accuracy:</Text> %52 &nbsp;
            <Text strong>Macro F1:</Text> 0.10 &nbsp;
            <Text strong>Weighted F1:</Text> 0.48
          </Paragraph>

          <Paragraph type="danger">
            Not: Bazı sınıflarda çok az örnek olduğu için modelin öğrenmesi
            sınırlı kalmıştır. Veri dengesizliği performansı düşürmektedir. Bu nedenle ürettiğim veri seti üzerinde Bert tabanlıda daha iyi sonuçlar elde etmekteyim (0.98 Accuracy) ve web sayfasındaki asistan botu buna yönelik çalışmaktadır.
          </Paragraph>
        </Typography>
      </Card>
    </div>
  );
};

export default T5ModelInfoPage;