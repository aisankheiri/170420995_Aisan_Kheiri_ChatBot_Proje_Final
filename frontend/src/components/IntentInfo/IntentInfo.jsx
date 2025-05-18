import React from "react";
import { Card, Typography, Divider } from "antd";

const { Title, Paragraph } = Typography;

const IntentInfo = () => {
  return (
    <div>
      {" "}
      <Card style={{ marginBottom: 32, background: "#fff", borderRadius: 16 }}>
        <Title level={4} style={{ color: "#1f3a93" }}>
          🎯 Intent Tanımları
        </Title>
        <Divider />
        <Paragraph>
          <strong>Greeting:</strong> Kullanıcının sohbeti başlatmak için yazdığı
          “Merhaba”, “Selam” gibi selamlaşma ifadelerini kapsar.
        </Paragraph>
        <Paragraph>
          <strong>Goodbye:</strong> Kullanıcının sohbeti bitirirken kullandığı
          “Hoşça kal”, “Görüşürüz” gibi vedalaşma cümlelerini tanımlar.
        </Paragraph>
        <Paragraph>
          <strong>Fallback:</strong> Anlamı belirsiz ya da sistemin anlayamadığı
          ifadeler bu sınıfa girer; örneğin “???” veya tutarsız komutlar.
        </Paragraph>
        <Paragraph>
          <strong>AddToCart:</strong> Kullanıcının sepete ürün eklemek istediği
          komutlar; örneğin “3 adet kırmızı tişört ekle”.
        </Paragraph>
        <Paragraph>
          <strong>RemoveFromCart:</strong> Sepetteki belirli ürünleri kaldırma
          istekleri bu sınıfa girer; örneğin “pantolonu çıkar”.
        </Paragraph>
        <Paragraph>
          <strong>ViewCart:</strong> Sepetin içeriğini görüntülemeye yönelik
          komutlar; örneğin “Sepetimde ne var?”.
        </Paragraph>
        <Paragraph>
          <strong>UpdateQuantity:</strong> Sepetteki ürünlerin adetini
          değiştirmek için verilen komutlar; örneğin “tişört adedini 2 yap”.
        </Paragraph>
        <Paragraph>
          <strong>ClearCart:</strong> Tüm sepeti temizlemeye yönelik komutlar;
          örneğin “Sepeti sıfırla”, “Her şeyi sil”.
        </Paragraph>
        <Paragraph>
          <strong>ApplyDiscount:</strong> Kullanıcının indirim veya kupon kodu
          uygulama isteğini ifade eder; örneğin “IND10 kodunu kullan”.
        </Paragraph>
        <Paragraph>
          <strong>Checkout:</strong> Alışverişi sonlandırmak, ödeme adımına
          geçmek için verilen komutlar; örneğin “Satın al”, “Kasaya git”.
        </Paragraph>
      </Card>
    </div>
  );
};

export default IntentInfo;
