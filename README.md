"# 170420995_Aisan_Kheiri_ChatBot_Proje_Final" 
Projeye ait 3 dakikalık video linki : https://drive.google.com/file/d/1T27OXsg9vmI7DbHRLNYyebK8bkAPU4yp/view?usp=sharing
![WhatsApp Image 2025-05-19 at 15 02 11](https://github.com/user-attachments/assets/683dd457-025c-4e68-bc3c-aeea93e9d0db)
![image](https://github.com/user-attachments/assets/1614ff08-88d4-4cfc-88e9-b594b6945cfb)
![WhatsApp Image 2025-05-19 at 15 02 11(1)](https://github.com/user-attachments/assets/9f226ff6-97ca-4c54-9598-9d25c0594f83)
![image](https://github.com/user-attachments/assets/a94a2515-1779-41c9-9804-c0a2b14717b5)
![image](https://github.com/user-attachments/assets/4a934a2c-736e-4b64-b518-a1299ebd1d84)
![image](https://github.com/user-attachments/assets/5fec48ac-3939-4208-962a-0a07c9e515b3)

🔄 Cevaplama Sistemi
Modelin bir cümleye karşılık tahmin ettiği intent, yalnızca sınıflandırma çıktısı olarak kalmaz; aynı zamanda kullanıcıya verilecek cevabın temelini oluşturur.
Bu amaçla projede kural tabanlı yanıt üretim sistemi uygulanmıştır. Her intent sınıfı için sabit fakat çeşitlendirilmiş yanıt şablonları (templates) tanımlanmıştır. Bu şablonlardan biri rastgele seçilerek kullanıcıya cevap olarak döndürülür.
Kullanım Mekanizması

    LLM modeli intent sınıflandırması yapar.
    Bu intent etiketi, templates sözlüğünde karşılık gelen cevap grubunu belirler.
    random.choice() fonksiyonu ile bu gruptan doğal bir yanıt seçilir.
    Yanıt, kullanıcıya iletilir.

Neden Bu Yöntem?

    Chatbot daha insani, çeşitli ve doğal tepkiler verir.
    Sistem düşük kaynakla yüksek kalitede yanıt sağlayabilir.
    Her intent için özelleştirilmiş yanıtlarla kullanıcı deneyimi zenginleşir.

Örnek Akış

    Kullanıcı: “Sepetimde neler var?”
    Model: intent = ViewCart
    Cevap: "İşte şu anda sepetinizde bulunan ürünler:"
📘 Veri Seti Oluşturma Süreci
Bu projede kullanılan Türkçe e-ticaret amaçlı veri seti, manuel olarak oluşturulan şablon cümlelerin sistematik biçimde varyasyonlanması ile hazırlanmıştır.
🔢 Toplam Veri
Toplam Örnek Sayısı
1,778
Intent Türü
10
1. Intent Tanımları ve Dağılımı

    UpdateQuantity: 896 örnek
    AddToCart: 672 örnek
    RemoveFromCart: 112 örnek
    ApplyDiscount: 56 örnek
    Greeting: 7 örnek
    Goodbye: 7 örnek
    Fallback: 7 örnek
    ViewCart: 7 örnek
    ClearCart: 7 örnek
    Checkout: 7 örnek

2. Template Cümleler
Her intent sınıfı için 5–10 adet doğal cümle yapısı (template) hazırlanmıştır. Bu şablonlarda {product}, {qty}, {code} gibi yer tutucular kullanılmıştır.
3. Varyasyon Listeleri
products: kırmızı elbise, beyaz tişört, yeşil mont, gri kazak, lila etek ...
quantities: 1 adet, 2 adet, 3 adet, 4 adet, 5 adet ...
discount_codes: INDIRIM10, FIRSAT20, KARGOBEDAVA ...
4. Otomatik Üretim
Python itertools.product() fonksiyonu kullanılarak:

    {product}, {qty} geçen şablonlar → ürün & miktar kombinasyonları ile genişletildi.
    {code} içeren şablonlar → her indirim koduyla türetildi.
    Diğer sabit şablonlar doğrudan veri setine eklendi.

5. Sonuç
Elde edilen veri seti:

    Intent ve Cümle sütunlarından oluşur.
    Her sınıf için yüzlerce varyasyon içerir.
    Doğal dil sınıflandırma (intent classification) için uygun hale getirilmiştir.

https://www.kaggle.com/datasets/aisankheiri/turkish-e-commerce-dataset-with-different-intents
Kullanılan Dil Modeli: dbmdz/bert-base-turkish-cased
Bu projede sınıflandırma görevini gerçekleştirmek için dbmdz/bert-base-turkish-cased modeli tercih edilmiştir.
Neden Bu Model?
Bu model, BERT mimarisine dayalı olarak eğitilmiş ve Türkçe diline özgü büyük miktarda veride önceden eğitilmiştir. Türkçe dil bilgisine uygun tokenizasyon, morfolojik zenginliklere duyarlılık ve cümle yapısını daha doğru kavrama becerisi sayesinde niyet sınıflandırması gibi görevlerde yüksek performans sunar.

    Türkçeye özel: Cümle yapısı, ek yapıları gibi dil özelliklerini iyi kavrar.
    BERT altyapısı: Derin bağlamsal anlam çıkarmada güçlüdür.

Modelin Kullanım Amacı
Kullanıcının yazdığı doğal dildeki e-ticaret mesajlarını sınıflandırarak (örneğin: "sepetime kazak ekle" → AddToCart) sistemin doğru işlemi gerçekleştirmesini sağlar.
📈 Model Performans Raporu
Aşağıda, her bir intent sınıfı için modelin sınıflandırma performans metrikleri (Precision, Recall, F1-Score) ve destek sayıları yer almaktadır.
Intent	Precision	Recall	F1-Score	Destek (Support)
AddToCart	1	1	1	141
ApplyDiscount	1	1	1	14
Checkout	1	1	1	1
ClearCart	0	0	0	4
RemoveFromCart	0.9375	1	0.9677	15
UpdateQuantity	1	1	1	181
ViewCart	0	0	0	0
Genel Başarı Metrikleri:

    Accuracy: 0.9888
    Macro Avg F1: 0.7097
    Weighted Avg F1: 0.9874
![image](https://github.com/user-attachments/assets/1ff0c33e-0332-46db-a589-1b87e86473e3)
