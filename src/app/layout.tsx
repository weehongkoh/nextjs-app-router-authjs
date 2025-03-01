import '@ant-design/v5-patch-for-react-19';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import "@/app/globals.css";

import { Inter } from "next/font/google";
import Provider from "@/components/Provider";
import AntdProvider from "@/providers/AntdProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextJs 15 App Router and NextAuth",
  description: "NextJs 15 App Router and NextAuth",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <AntdRegistry>
            <AntdProvider>{children}</AntdProvider>
          </AntdRegistry>
        </Provider>
      </body>
    </html>
  );
}
