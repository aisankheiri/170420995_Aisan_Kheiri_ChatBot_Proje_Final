import React from "react";
import { Card, Col, Row, Typography, Avatar } from "antd";

const { Title, Paragraph } = Typography;

const people = [
  {
    name: "Aisan Kheiri",
    adayno: "170420995",
    role: "Bilgisayar Mühendisi Öğrencisi",
    image: "/img/aisan.png",
    email: "aisankheiri@marun.edu.tr",
    bio: `Marmara Üniversitesi Teknoloji Fakültesi Bilgisayar Mühendisliği Bölümü`,
  },
];

const GrupInformation = () => {
  return (
    <div
      style={{
        padding: "60px 20px",
        backgroundColor: "#f0f2f5",
        minHeight: "100vh",
      }}
    >
      <Row gutter={[32, 32]} justify="center">
        {people.map((person, index) => (
          <Col xs={24} sm={20} md={12} lg={8} key={index}>
            <Card
              hoverable
              style={{
                borderRadius: 16,
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
              }}
            >
              <Avatar
                src={person.image}
                size={96}
                style={{ marginBottom: 16 }}
              />
              <Title level={4} style={{ marginBottom: 0 }}>
                {person.name}
              </Title>
              <Paragraph style={{ marginBottom: 0 }}>
                <strong>Öğrenci No:</strong> {person.adayno}
              </Paragraph>
              <Paragraph
                style={{
                  fontStyle: "italic",
                  color: "#595959",
                  marginBottom: 10,
                }}
              >
                {person.role}
              </Paragraph>
              <Paragraph style={{ marginTop: 10 }}>{person.bio}</Paragraph>
              <Paragraph style={{ marginTop: 10 }}>
                <strong>E-posta:</strong>{" "}
                <a href={`mailto:${person.email}`}>{person.email}</a>
              </Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default GrupInformation;
