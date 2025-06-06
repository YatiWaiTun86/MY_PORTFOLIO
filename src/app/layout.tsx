import "./globals.css";
import type { Metadata } from "next";
import VideoBackground from "./components/videobackground";

export const metadata: Metadata = {
  title: "Cyberpunk Background",
  description: "Cyberpunk city reverse loop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="m-0 p-0 text-white">
        <VideoBackground />
        <div>{children}</div>
      </body>
    </html>
  );
}
