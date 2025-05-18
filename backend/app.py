from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # React ile farklı portta çalışacağımız için CORS'u açıyoruz

@app.route('/api/message', methods=['GET'])
def get_message():
    return jsonify(message="Merhaba from Flask!")

@app.route('/api/echo', methods=['POST'])
def echo():
    data = request.json or {}
    # Örneğin React'ten gelen { text: "..." } içindeki text'i geri yolluyoruz
    return jsonify(echo=f"Flask received: {data.get('text', '')}")

if __name__ == '__main__':
    app.run(debug=True, port=5000)
