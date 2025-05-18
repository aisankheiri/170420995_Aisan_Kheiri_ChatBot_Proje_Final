import React from 'react';
import { Card, Typography } from 'antd';

const { Title, Paragraph, Text } = Typography;

const BertModelInfoPanel = () => {
  return (
    <Card style={{ maxWidth: 900, margin: '40px auto', borderRadius: 12 }}>
      <Typography>
        <Title level={3}>Kullanılan Dil Modeli: dbmdz/bert-base-turkish-cased</Title>

        <Paragraph>
          Bu projede sınıflandırma görevini gerçekleştirmek için <Text code>dbmdz/bert-base-turkish-cased</Text> modeli tercih edilmiştir.
        </Paragraph>

        <Title level={4}>Neden Bu Model?</Title>
        <Paragraph>
          Bu model, BERT mimarisine dayalı olarak eğitilmiş ve Türkçe diline özgü büyük miktarda veride önceden eğitilmiştir. Türkçe dil bilgisine uygun tokenizasyon, morfolojik zenginliklere duyarlılık ve cümle yapısını daha doğru kavrama becerisi sayesinde niyet sınıflandırması gibi görevlerde yüksek performans sunar.
        </Paragraph>

        <Paragraph>
          <ul>
            <li><Text strong>Türkçeye özel:</Text> Cümle yapısı, ek yapıları gibi dil özelliklerini iyi kavrar.</li>
            <li><Text strong>BERT altyapısı:</Text> Derin bağlamsal anlam çıkarmada güçlüdür.</li>
            <li><Text strong>HuggingFace uyumlu:</Text> Kolayca entegre edilebilir, geniş topluluk desteğine sahiptir.</li>
          </ul>
        </Paragraph>

        <Title level={4}>Modelin Kullanım Amacı</Title>
        <Paragraph>
          Kullanıcının yazdığı doğal dildeki e-ticaret mesajlarını sınıflandırarak (örneğin: "sepetime kazak ekle" → <Text code>AddToCart</Text>) sistemin doğru işlemi gerçekleştirmesini sağlar.
        </Paragraph>
      </Typography>
    </Card>
  );
};

export default BertModelInfoPanel;
