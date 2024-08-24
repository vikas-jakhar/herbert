import "./globals.css";

export const metadata = {
  title: "Herbert",
  description: "Herbert",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
