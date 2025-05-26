import { Toaster } from "sonner";
import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SocialHub || Social Web App",
  description: "Next.js social media application project",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex-1 lg:min-w-[600px] border-x-[1px] border-borderGray ">
          {children}
          {modal}
          <Toaster
            position="top-right"
            theme="light"
            toastOptions={{
              style: {
                border: "1px solid #a855f7",
                background: "#f5f3ff",
                color: "#6b21a8",
              },
            }}
          />
        </div>
      </body>
    </html>
  );
}
