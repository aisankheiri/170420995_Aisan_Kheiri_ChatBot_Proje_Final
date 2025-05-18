import React, { useState } from 'react';
import { Input, Button, Card, Space, message } from 'antd';
import axios from 'axios';

const { TextArea } = Input;

const Chat = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState(null);
  const [loading, setLoading] = useState(false);

  const askQuestion = async () => {
    if (!question.trim()) {
      message.warning('Lütfen bir soru girin.');
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/ask', { question });
      setAnswer(res.data.answer);
    } catch (err) {
      message.error('Sunucuya bağlanırken hata oluştu.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Space direction="vertical" style={{ width: '100%' }} size="large">
      <TextArea
        rows={4}
        value={question}
        onChange={e => setQuestion(e.target.value)}
        placeholder="Sorunuzu buraya yazın..."
      />
      <Button type="primary" onClick={askQuestion} loading={loading}>
        SOR
      </Button>
      {answer && (
        <Card title="Cevap">
          {answer}
        </Card>
      )}
    </Space>
  );
};

export default Chat;
