import "./globals.css";

export const metadata = {
  title: "Herbert",
  description: "Herbert",
  // metadataBase: new URL(""),
  openGraph: {
    images: "/home-meta-img.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}