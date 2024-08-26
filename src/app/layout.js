import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { repositoryName } from '@/prismicio';
import { PrismicPreview } from '@prismicio/next';

import "./globals.css";

export const metadata = {
  title: "Rowena Reuss",
  description: "Fotografering og hårstyling",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da" className="scroll-smooth scroll-pt-16">
      <body id="home" className="bg-lightest relative text-base md:text-sm">
        {children}
        <PrismicPreview repositoryName={repositoryName} />
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
