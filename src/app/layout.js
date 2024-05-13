import "./globals.css";

export const metadata = {
  title: "Rowena Reuss",
  description: "Fotografering og hårstyling",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body>
        {children}
      </body>
    </html>
  );
}
