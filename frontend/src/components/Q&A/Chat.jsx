// Chat.jsx
import React, { useState } from 'react';
import { Input, Button, Card, Typography, Tag, List, Space } from 'antd';
import axios from 'axios';

const { TextArea } = Input;
const { Title, Paragraph } = Typography;

const Chat = () => {
  const [input, setInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const askQuestion = async () => {
    if (!input.trim()) return;
    const userMessage = input.trim();
    setInput('');
    setLoading(true);

    try {
      const res = await axios.post('http://localhost:5000/predict', { text: userMessage });
      const botResponse = res.data.response;
      const intent = res.data.intent;

      setChatHistory(prev => [
        ...prev,
        { role: 'user', text: userMessage },
        { role: 'bot', text: botResponse, intent }
      ]);
    } catch (err) {
      setChatHistory(prev => [
        ...prev,
        { role: 'user', text: userMessage },
        { role: 'bot', text: 'Sunucuya bağlanırken hata oluştu.' }
      ]);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      askQuestion();
    }
  };

  return (
    <div style={{ minHeight: '90vh', display: 'flex', justifyContent: 'center', padding: '20px' }}>
      <Card style={{ width: '100%', maxWidth: 720, borderRadius: 16, boxShadow: '0 8px 24px rgba(0,0,0,0.4)' }}>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <div style={{ textAlign: 'center' }}>
            <Title level={3} style={{ color: '#1f3a93', fontWeight: 'bold' }}>✨ AI Chat Asistan ✨</Title>
            <Paragraph style={{ fontSize: 14, color: '#6c757d' }}>Türkçe e-ticaret chatbotu</Paragraph>
          </div>

          <List
            size="small"
            bordered
            dataSource={chatHistory}
            renderItem={(msg) => (
              <List.Item style={{ backgroundColor: msg.role === 'user' ? '#e6f7ff' : '#f9f9f9' }}>
                <div style={{ width: '100%' }}>
                  <strong>{msg.role === 'user' ? 'Siz' : 'Bot'}:</strong> {msg.text}
                  {msg.intent && <Tag color="blue" style={{ marginLeft: 8 }}>Intent: {msg.intent}</Tag>}
                </div>
              </List.Item>
            )}
            style={{ maxHeight: '40vh', overflowY: 'auto', padding: '0 8px' }}
          />

          <TextArea
            rows={3}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Sorunuzu buraya yazın... (Enter: Gönder, Shift+Enter: Satır içi)"
          />

          <Button type="primary" onClick={askQuestion} loading={loading} block>
            Gönder
          </Button>
        </Space>
      </Card>
    </div>
  );
};

export default Chat;