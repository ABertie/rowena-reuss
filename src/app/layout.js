import "./globals.css";

export const metadata = {
  title: "Rowena Reuss",
  description: "Fotografering og hårstyling",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da" className="scroll-smooth scroll-pt-16">
      <body id="home" className="bg-prim-light/15 relative">
        <header className="flex flex-row-reverse gap-4 absolute inset-0 bottom-auto z-50 p-8 bg-prim-light/30">
          <a href="#aboutme">About Me</a>
          <a href="#home">Home</a>
        </header>
        {children}
      </body>
    </html>
  );
}
