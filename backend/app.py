from flask import Flask, jsonify, request
from flask_cors import CORS
from flask import Flask, request, jsonify
from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch
import random

app = Flask(__name__)
CORS(app)  # React ile farklı portta çalışacağımız için CORS'u açıyoruz

# 1. Model ve tokenizer yükleniyor
model_ckpt = "dbmdz/bert-base-turkish-cased"
model = AutoModelForSequenceClassification.from_pretrained("./model/bert-base-turkish-cased")  # Fine-tuned model yolu
tokenizer = AutoTokenizer.from_pretrained(model_ckpt)
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model.to(device)

# 2. Intent mapping
id2label = model.config.id2label

# 3. Yanıt templates
templates = {
    "Greeting": [
        "Merhaba, nasıl yardımcı olabilirim?",
        "Selam! Size ne konuda yardımcı olabilirim?",
        "Günaydın! Sorunuz var mı?",
        "İyi günler! Ne hakkında bilgi istiyorsunuz?",
        "Hoş geldiniz! Size nasıl yardımcı olayım?",
        "Selamünaleyküm! Nasıl yardımcı olabilirim?",
        "Merhaba! Bugün ne hakkında konuşmak istersiniz?"
    ],
    "Goodbye": [
        "Görüşmek üzere, iyi günler.",
        "Hoşça kalın!",
        "İyi günler dilerim.",
        "Seneye görüşmek üzere!",
        "Hoşça kalın, tekrar bekleriz.",
        "Teşekkürler, kendinize iyi bakın.",
        "Alışveriş için teşekkürler, iyi günler."
    ],
    "Fallback": [
        "Üzgünüm, bunu anlayamadım.",
        "Tekrar eder misiniz lütfen?",
        "Bunu anlayamadım, başka bir şekilde sorar mısınız?",
        "Maalesef bu soruya cevap veremiyorum.",
        "Üzgünüm, ne demek istediğinizi çözemedim.",
        "Lütfen soruyu yeniden formüle eder misiniz?",
        "Anlayamadım, farklı bir ifade kullanabilir misiniz?"
    ],
    "AddToCart": [
        "Ürün sepete başarıyla eklendi.",
        "İstediğiniz ürünleri sepete ekledim.",
        "Tamamdır, ürünler sepette.",
        "Siparişiniz hazırlanıyor, sepetteki yerini aldı.",
        "Ürünler sepete eklendi, başka bir isteğiniz var mı?"
    ],
    "RemoveFromCart": [
        "İlgili ürün sepetten çıkarıldı.",
        "Tamamdır, ürünü kaldırdım.",
        "İstediğiniz ürün artık sepetinizde değil.",
        "Ürün başarıyla sepetten silindi."
    ],
    "ViewCart": [
        "Sepetinizdeki ürünler listeleniyor...",
        "İşte şu anda sepetinizde bulunan ürünler:",
        "Sepet detaylarınız hazır.",
        "Sepetteki içerik aşağıdaki gibidir."
    ],
    "UpdateQuantity": [
        "Ürün miktarı güncellendi.",
        "Belirttiğiniz adette ürün ayarlandı.",
        "Ürün sayısı başarıyla değiştirildi.",
        "Adet bilgisi güncellendi."
    ],
    "ClearCart": [
        "Sepet temizlendi.",
        "Tüm ürünler sepetten silindi.",
        "Sepetiniz artık boş.",
        "İstediğiniz gibi sepet sıfırlandı."
    ],
    "ApplyDiscount": [
        "İndirim kodu uygulandı.",
        "Kupon başarıyla eklendi.",
        "İndirim tanımlandı, sepet güncellendi.",
        "Belirttiğiniz kod aktif edildi."
    ],
    "Checkout": [
        "Satın alma işlemi başlatıldı.",
        "Ödeme sayfasına yönlendiriliyorsunuz...",
        "Siparişiniz hazırlanıyor.",
        "Alışveriş tamamlandı, teşekkür ederiz."
    ]
}


# 4. Tahmin fonksiyonu
def predict_intent(text):
    inputs = tokenizer(text, return_tensors="pt", truncation=True, padding=True)
    inputs = {k: v.to(device) for k, v in inputs.items()}
    with torch.no_grad():
        outputs = model(**inputs)
    pred_id = outputs.logits.argmax(-1).item()
    intent = id2label[pred_id]
    return intent

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    user_text = data.get("text", "")
    intent = predict_intent(user_text)
    response = random.choice(templates.get(intent, templates["Fallback"]))
    return jsonify({"intent": intent, "response": response})



@app.route('/ask', methods=['POST'])
def ask():
    data = request.get_json()
    question = data.get('question', '')
    
    # TODO: Burada modelinizi çağırın, question üzerinden cevap üretin
    # Örneğin OpenAI API ile: response = openai.Completion.create(...)
    # answer = response.choices[0].text.strip()
    
    answer = f"Model cevabı (echo): {question}"  # demo amaçlı echo
    
    return jsonify({'answer': answer})


if __name__ == '__main__':
    app.run(debug=True, port=5000)
