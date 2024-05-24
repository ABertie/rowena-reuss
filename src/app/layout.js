import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        <ToastContainer
          position="bottom-left"
          autoClose={10000}
          theme="colored"
          stacked 
        />
      </body>
    </html>
  );
}
