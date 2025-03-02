'use client';
import React, { useState, useEffect } from 'react';
import {
  HomeOutlined,
  FormOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme, Avatar, Space, Typography, Button, Grid } from 'antd';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const { Header, Content, Footer, Sider } = Layout;
const { Text } = Typography;
const { useBreakpoint } = Grid;

type MenuItem = Required<MenuProps>['items'][number];

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const screens = useBreakpoint();
  
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    setIsMobile(!(screens.md || false));
    setCollapsed(!(screens.md || false));
  }, [screens]);

  const handleLogout = () => {
    signOut({ callbackUrl: '/' });
  };

  const menuItems: MenuItem[] = [
    {
      key: 'home',
      label: 'Home',
      icon: <HomeOutlined />,
      onClick: () => router.push('/protected')
    },
    {
      key: 'form',
      label: 'Form Example',
      icon: <FormOutlined />,
      onClick: () => router.push('/protected/formExample')
    },
    {
      key: 'signout',
      label: 'Sign out',
      icon: <LogoutOutlined />,
      onClick: handleLogout
    }
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider 
        collapsible={!isMobile}
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        breakpoint="md"
        collapsedWidth={isMobile ? 0 : 80}
        trigger={null}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={['home']}
          mode="inline"
          items={menuItems}
        />
      </Sider>
      <Layout>
        <Header style={{ 
          padding: '0 16px', 
          background: colorBgContainer, 
          display: 'flex', 
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <Space>
            <Text style={{ display: screens.sm ? 'inline' : 'none' }}>
              {session?.user?.name}
            </Text>
            <Avatar 
              src={session?.user?.image} 
              alt={session?.user?.name || 'User avatar'}
              style={{ cursor: 'pointer' }}
            >
              {!session?.user?.image && session?.user?.name?.[0]}
            </Avatar>
          </Space>
        </Header>
        <Content 
          style={{
            margin: isMobile ? '0.5rem' : '1rem',
            padding: isMobile ? '0.5rem' : '1rem',
            minHeight: 280,
            borderRadius: borderRadiusLG,
            background: colorBgContainer,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <div style={{ 
            flex: 1, 
            overflow: 'auto',
            width: '100%',
            maxWidth: '100%'
          }}>
            {children}
          </div>
        </Content>
        <Footer style={{ 
          textAlign: 'center',
          padding: isMobile ? '12px' : '24px'
        }}>
          Ant Design {new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}
