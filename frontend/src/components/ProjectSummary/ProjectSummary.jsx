import React from 'react';
import { Card, Divider, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const ProjectSummary = () => {
  return (
    <Card
      style={{ marginBottom: 32, background: '#ffffffcc', borderRadius: 16 }}
    >
      <Title level={4} style={{ color: '#1f3a93' }}>
        📌 Proje Özeti
      </Title>
      <Divider />
      <Paragraph>
        <strong>1. Amaç:</strong> Bu proje, doğal dil ile yazılmış Türkçe
        kullanıcı mesajlarını sınıflandırarak, alışverişle ilgili bir chatbot'un
        doğru şekilde tepki vermesini sağlar. Örneğin: “sepetime 2 kırmızı kazak
        ekle” cümlesi, sistem tarafından <em>AddToCart</em> niyetiyle tanımlanır.
      </Paragraph>
      <Paragraph>
        <strong>2. Veri Seti ve Yapısı:</strong> Eğitim verisi, kullanıcı
        mesajlarından (Cümle) ve buna ait niyet etiketlerinden (Intent) oluşur.
        Etiketler, örneğin <em>ViewCart</em>, <em>Checkout</em>,{' '}
        <em>RemoveFromCart</em>, <em>Greeting</em> gibi kategorileri içerir.
      </Paragraph>
      <Paragraph>
        <strong>3. Modelleme:</strong> HuggingFace transformers kütüphanesi ile
        Türkçe için özel eğitilmiş <em>dbmdz/bert-base-turkish-cased</em> modeli
        kullanılmıştır. Model, kullanıcı mesajlarını vektöre çevirip sınıflandırma
        yapar.
      </Paragraph>
      <Paragraph>
        <strong>4. Performans:</strong> Model, test verisi üzerinde{' '}
        <em>accuracy</em>, <em>precision</em>, <em>recall</em>,{' '}
        <em>f1-score</em> gibi metriklerle değerlendirilmiştir.
      </Paragraph>
    </Card>
  );
};

export default ProjectSummary;
