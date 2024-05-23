import "./globals.css";

export const metadata = {
  title: "Rowena Reuss",
  description: "Fotografering og hårstyling",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-16">
      <body id="home" className="bg-prim-light/15 relative text-base md:text-sm">
        {children}
      </body>
    </html>
  );
}
