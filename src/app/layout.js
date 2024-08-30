import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { createClient, repositoryName } from '@/prismicio';
import { PrismicPreview } from '@prismicio/next';

import "./globals.css";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fab, fas, far)

import React from 'react';
config.autoAddCss = false

export const metadata = {
  title: "Rowena Reuss",
  description: "Fotografering og hårstyling",
};

export default async function RootLayout({ children }) {
  const client = createClient();
  const color = await client.getSingle("color")
  return (
    <html lang="da" className="scroll-smooth scroll-pt-16">
      <style>
        :root {`{
          --brand: ${color.data.brand};
          --darkest: ${color.data.darkest};
          --dark: ${color.data.dark};
          --mid: ${color.data.mid};
          --light: ${color.data.light};
          --lightest: ${color.data.lightest};
        }`}
      </style>
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