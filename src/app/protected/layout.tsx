'use client';
import React, { useState } from 'react';
import {
  HomeOutlined,
  FormOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme, Avatar, Space, Typography } from 'antd';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const { Header, Content, Footer, Sider } = Layout;
const { Text } = Typography;

type MenuItem = Required<MenuProps>['items'][number];

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const router = useRouter();
  const { data: session } = useSession();

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
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
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
          justifyContent: 'flex-end' 
        }}>
          <Space>
            <Text>{session?.user?.name}</Text>
            <Avatar 
              src={session?.user?.image} 
              alt={session?.user?.name || 'User avatar'}
              style={{ cursor: 'pointer' }}
            >
              {!session?.user?.image && session?.user?.name?.[0]}
            </Avatar>
          </Space>
        </Header>
        <Content style={{ margin: '1rem', borderRadius: borderRadiusLG, background: colorBgContainer, padding: '1rem' }}>
          {children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design {new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}
