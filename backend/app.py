from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # React ile farklı portta çalışacağımız için CORS'u açıyoruz

@app.route('/api/message', methods=['GET'])
def get_message():
    return jsonify(message="Merhaba from Flask!")

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
