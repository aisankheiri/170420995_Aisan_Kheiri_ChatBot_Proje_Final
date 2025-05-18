import React, { useState } from 'react';
import { Input, Button, Card, Space, Typography } from 'antd';
import axios from 'axios';

const { TextArea } = Input;
const { Title, Paragraph } = Typography;

const Chat = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState(null);
  const [loading, setLoading] = useState(false);

  const askQuestion = async () => {
    if (!question.trim()) return;
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/ask', { question });
      setAnswer(res.data.answer);
    } catch (err) {
      setAnswer('Sunucuya bağlanırken hata oluştu.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '65vh', display: 'flex',  justifyContent: 'center'}}>
      <Card style={{ width: '100%', maxWidth: 600, borderRadius: 16, boxShadow: '0 8px 24px rgba(0,0,0,0.4)' }}>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: 8 }}>
            <Title level={3} style={{ marginBottom: 0, color: '#1f3a93', fontWeight: 'bold' }}>✨ AI Chat Asistan ✨</Title>
            <Paragraph style={{ fontSize: 14, color: '#6c757d' }}>Türkçe e-ticaret chatbotu</Paragraph>
          </div>

          <TextArea
            rows={4}
            value={question}
            onChange={e => setQuestion(e.target.value)}
            placeholder="Sorunuzu buraya yazın..."
          />

          <Button type="primary" onClick={askQuestion} loading={loading} block>
            SOR
          </Button>

          {answer && (
            <Card type="inner" title="Cevap" style={{ backgroundColor: '#fafafa', borderRadius: 12 }}>
              <Paragraph style={{ whiteSpace: 'pre-line' }}>{answer}</Paragraph>
            </Card>
          )}
        </Space>
      </Card>
    </div>
  );
};

export default Chat;