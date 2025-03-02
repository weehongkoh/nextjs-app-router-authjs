'use client';
import React from 'react';
import { Breadcrumb, theme } from 'antd';
import { useSession } from 'next-auth/react';

export default function ProtectedPage() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const { data: session } = useSession();

  return (
    <>
      <div
        style={{
          padding: 24,
          minHeight: 360,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        <pre className="w-full bg-gray-200 p-4 rounded break-words">
          {JSON.stringify(session?.user, null, 2)}
        </pre>
      </div>
    </>
  );
}