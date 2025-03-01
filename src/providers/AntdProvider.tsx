'use client';

import { ConfigProvider } from 'antd';
import { ReactNode } from 'react';
import theme from '../theme/themeConfig';

export default function AntdProvider({ children }: { children: ReactNode }) {
  return <ConfigProvider theme={theme}>{children}</ConfigProvider>;
}
