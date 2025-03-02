'use client';
import React from 'react';
import { Breadcrumb, theme } from 'antd';

export default function ProtectedPage() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const breadcrumbItems = [
    { title: 'User' },
    { title: 'Bill' },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbItems} style={{ margin: '16px 0' }} />
      <div
        style={{
          padding: 24,
          minHeight: 360,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        Bill is a cat.
      </div>
    </>
  );
}