import React from "react";
import { Card, Typography, List } from "antd";

const { Title, Paragraph, Text } = Typography;

const AnsweringSystemInfo = () => {
  const usageSteps = [
    "LLM modeli intent sınıflandırması yapar.",
    "Bu intent etiketi, templates sözlüğünde karşılık gelen cevap grubunu belirler.",
    "random.choice() fonksiyonu ile bu gruptan doğal bir yanıt seçilir.",
    "Yanıt, kullanıcıya iletilir."
  ];

  const benefits = [
    "Chatbot daha insani, çeşitli ve doğal tepkiler verir.",
    "Sistem düşük kaynakla yüksek kalitede yanıt sağlayabilir.",
    "Her intent için özelleştirilmiş yanıtlarla kullanıcı deneyimi zenginleşir."
  ];

  const exampleFlow = [
    'Kullanıcı: “Sepetimde neler var?”',
    'Model: intent = ViewCart',
    'Cevap: "İşte şu anda sepetinizde bulunan ürünler:"'
  ];

  return (
    <Card style={{ marginBottom: 32, background: "#fff", borderRadius: 16 }}>
         <Title level={4} style={{ color: "#1f3a93" }}>
         🔄 Cevaplama Sistemi
        </Title>
      <Typography>
        <Paragraph>
          <Text strong>Modelin bir cümleye karşılık tahmin ettiği intent</Text>, yalnızca sınıflandırma çıktısı olarak kalmaz;
          aynı zamanda kullanıcıya verilecek cevabın temelini oluşturur.
        </Paragraph>
        <Paragraph>
          Bu amaçla projede <Text code>kural tabanlı yanıt üretim sistemi</Text> uygulanmıştır. Her intent sınıfı için sabit
          fakat çeşitlendirilmiş yanıt şablonları (templates) tanımlanmıştır. Bu şablonlardan biri rastgele seçilerek kullanıcıya
          cevap olarak döndürülür.
        </Paragraph>

        <Title level={5}>Kullanım Mekanizması</Title>
        <List
          dataSource={usageSteps}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />

        <Title level={5}>Neden Bu Yöntem?</Title>
        <List
          dataSource={benefits}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />

        <Title level={5}>Örnek Akış</Title>
        <List
          dataSource={exampleFlow}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      </Typography>
    </Card>
  );
};

export default AnsweringSystemInfo;
