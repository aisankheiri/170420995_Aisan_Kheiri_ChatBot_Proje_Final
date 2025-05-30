import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  FileOutlined,
  QuestionCircleOutlined,
  UserOutlined,
  InfoOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";

import GrupInformation from "../GrupInformation/GrupInformation";
import AboutPage from "../AboutPage/AboutPage";
import TabsDataSet from "../DataSet/TabsDataSet";
import TabsModels from "../Models/TabsModels";
import Chat from "../Q&A/Chat";

const { Header, Sider, Content } = Layout;

const HomePageLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState("2");

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const renderContent = () => {
    switch (selectedKey) {
      case "1":
        return <AboutPage />;
      case "2":
        return <Chat />;
      case "3":
        return <TabsDataSet />;
      case "4":
        return <TabsModels />;
      case "5":
        return <GrupInformation />;
      default:
        return <AboutPage />;
    }
  };

  return (
    <Layout>
      {/* Sabit Sidebar */}
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["2"]}
          selectedKeys={[selectedKey]}
          onClick={({ key }) => setSelectedKey(key)}
          items={[
            { key: "1", icon: <InfoOutlined />, label: "Proje Hakkında" },
            {
              key: "2",
              icon: <QuestionCircleOutlined />,
              label: "Soru Cevap Sistemi",
            },
            { key: "3", icon: <FileOutlined />, label: "Veri Seti" },
            { key: "4", icon: <InfoOutlined />, label: "Model Hakkında" },
            { key: "5", icon: <UserOutlined />, label: "Hazırlayan Hakkında" },
          ]}
        />
      </Sider>

      {/* İçerik Kısmı, Sidebar genişliğine göre kaydırılır */}
      <Layout style={{ marginLeft: collapsed ? 80 : 200, minHeight: "100vh" }}>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            position: "fixed",
            width: "100%",
            zIndex: 1,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{ fontSize: "16px", width: 64, height: 64 }}
          />
        </Header>
        <Content
          style={{
            margin: "100px 16px 24px",
            padding: 24,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            overflowY: "auto",
          }}
        >
          {renderContent()}
        </Content>
      </Layout>
    </Layout>
  );
};

export default HomePageLayout;
